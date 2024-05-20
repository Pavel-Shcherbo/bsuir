#ifndef LIST_OF_CLIENT_H
#define LIST_OF_CLIENT_H

#include <QDialog>

namespace Ui {
class list_of_client;
}

class list_of_client : public QDialog
{
    Q_OBJECT

public:
    explicit list_of_client(QWidget *parent = nullptr);
    ~list_of_client();

private:
    Ui::list_of_client *ui;
};

#endif // LIST_OF_CLIENT_H
