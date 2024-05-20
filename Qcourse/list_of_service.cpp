#include "list_of_service.h"
#include "ui_list_of_service.h"

list_of_service::list_of_service(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::list_of_service)
{
    ui->setupUi(this);
}

list_of_service::~list_of_service()
{
    delete ui;
}
