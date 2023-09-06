#define MAX_STUDENTS 100


int isFriend(int matrix[MAX_STUDENTS][MAX_STUDENTS], int i, int j);

int isAllFriends(int team[MAX_STUDENTS], int size, int matrix[MAX_STUDENTS][MAX_STUDENTS]);

int findTeam(int matrix[MAX_STUDENTS][MAX_STUDENTS], int team1[MAX_STUDENTS], int team2[MAX_STUDENTS]) ;

void printMatrix(int matrix[MAX_STUDENTS][MAX_STUDENTS]);

void fillMatrixFromFile(int matrix[MAX_STUDENTS][MAX_STUDENTS], const char* filename);

void fillMatrixRandom(int matrix[MAX_STUDENTS][MAX_STUDENTS]);

void printMenu(void);

