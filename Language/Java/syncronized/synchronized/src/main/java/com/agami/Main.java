package com.agami;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) throws InterruptedException {
        SynchronizedBlockCounter counter = new SynchronizedBlockCounter();

        int threadCount = 10;
        int incrementCount = 1_000_000;

        Thread[] threads = new Thread[threadCount];

        for (int i = 0; i < threadCount; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < incrementCount; j++) {
                    counter.increment();
                }
            });

            threads[i].start();
        }

        for (Thread thread : threads) {
            thread.join();
        }

        System.out.println("예상값: " + threadCount * incrementCount);
        System.out.println("실제값: " + counter.getCount());
    }
}