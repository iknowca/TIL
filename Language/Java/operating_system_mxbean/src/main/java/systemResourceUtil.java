import java.io.IOException;
import java.lang.management.ManagementFactory;
import java.nio.file.FileStore;
import java.nio.file.Files;
import java.nio.file.Path;

import com.sun.management.OperatingSystemMXBean;

public class systemResourceUtil {
    public static void main(String[] args) throws IOException, InterruptedException {
        OperatingSystemMXBean os = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();

        for (int i = 0; i < 10; i++) {

            double systemCpuUsage = os.getCpuLoad() * 100;
            double processCpuUsage = os.getProcessCpuLoad() * 100;

            System.out.printf(
                    "System CPU: %.2f%%, Process CPU: %.2f%%%n",
                    systemCpuUsage,
                    processCpuUsage
            );

            Thread.sleep(1000);
        }

//        memory
        long totalMemory = os.getTotalMemorySize();
        long freeMemory = os.getFreeMemorySize();
        long usedMemory = totalMemory-freeMemory;
        System.out.println("total memory: "+toGB(totalMemory));
        System.out.println("free memory: "+toGB(freeMemory));
        System.out.println("used memory: "+toGB(usedMemory));

        Path path = Path.of(System.getProperty("user.dir"));
        FileStore store = Files.getFileStore(path);

        long totalDisk = store.getTotalSpace();
        long freeDisk = store.getUsableSpace();
        long usedDisk = totalDisk-freeDisk;
        System.out.println("total disk: "+toGB(totalDisk));
        System.out.println("free disk: "+toGB(freeDisk));
        System.out.println("used disk: "+toGB(usedDisk));
    }

    private static double toGB(long bytes) {
        return bytes / 1024.0 / 1024.0 / 1024.0;
    }

    private static double percent(long used, long total) {
        return total == 0 ? 0 : used * 100.0 / total;
    }
}
