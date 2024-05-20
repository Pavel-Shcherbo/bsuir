#include "list_of_orders.h"
#include "ui_list_of_orders.h"

list_of_orders::list_of_orders(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::list_of_orders)
{
    ui->setupUi(this);
}

list_of_orders::~list_of_orders()
{
    delete ui;
}
