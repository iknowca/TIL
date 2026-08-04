#include "Common.h"

int main(int argc, char *argv[])
{
	SOCKET sock = socket(AF_INET, SOCK_STREAM, 0);
	if (sock == INVALID_SOCKET) err_quit("socket()");
	printf("[INFO] good socket!\n");

	close(sock);
	return 0;
}
