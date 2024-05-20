#ifndef LIST_OF_ORDERS_H
#define LIST_OF_ORDERS_H

#include <QDialog>

namespace Ui {
class list_of_orders;
}

class list_of_orders : public QDialog
{
    Q_OBJECT

public:
    explicit list_of_orders(QWidget *parent = nullptr);
    ~list_of_orders();

private:
    Ui::list_of_orders *ui;
};

#endif // LIST_OF_ORDERS_H
