#include "client_card.h"
#include "ui_client_card.h"

client_card::client_card(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::client_card)
{
    ui->setupUi(this);
}

client_card::~client_card()
{
    delete ui;
}
