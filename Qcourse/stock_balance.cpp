#include "stock_balance.h"
#include "ui_stock_balance.h"

stock_balance::stock_balance(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::stock_balance)
{
    ui->setupUi(this);
}

stock_balance::~stock_balance()
{
    delete ui;
}
