#ifndef STOCK_BALANCE_H
#define STOCK_BALANCE_H

#include <QDialog>

namespace Ui {
class stock_balance;
}

class stock_balance : public QDialog
{
    Q_OBJECT

public:
    explicit stock_balance(QWidget *parent = nullptr);
    ~stock_balance();

private:
    Ui::stock_balance *ui;
};

#endif // STOCK_BALANCE_H
