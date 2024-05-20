#ifndef LIST_OF_SERVICE_H
#define LIST_OF_SERVICE_H

#include <QDialog>

namespace Ui {
class list_of_service;
}

class list_of_service : public QDialog
{
    Q_OBJECT

public:
    explicit list_of_service(QWidget *parent = nullptr);
    ~list_of_service();

private:
    Ui::list_of_service *ui;
};

#endif // LIST_OF_SERVICE_H
