package com.agami;

import java.util.concurrent.Semaphore;

public class SemaphoreCounter {
    private final Semaphore semaphore = new Semaphore(1);
    private int count = 0;

    public void increment() {
        boolean acquired = false;

        try {
            semaphore.acquire();
            acquired = true;
            count += 1;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            if (acquired) {
                semaphore.release();
            }
        }
    }

    public int getCount() {
        boolean acquired = false;
        try {
            semaphore.acquire();
            acquired = true;
            return count;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            if (acquired) {
                semaphore.release();
            }
        }
        return 0;
    }

    public static void main(String[] args) throws InterruptedException{
        SemaphoreCounter counter = new SemaphoreCounter();

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
        System.out.println( "Count: " + counter.getCount());
    }
}
