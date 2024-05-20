#include "service_groups.h"
#include "ui_service_groups.h"

service_groups::service_groups(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::service_groups)
{
    ui->setupUi(this);
}

service_groups::~service_groups()
{
    delete ui;
}
