#include "list_of_client.h"
#include "ui_list_of_client.h"

list_of_client::list_of_client(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::list_of_client)
{
    ui->setupUi(this);
}

list_of_client::~list_of_client()
{
    delete ui;
}
