#include "arrival_of_parts.h"
#include "ui_arrival_of_parts.h"

arrival_of_parts::arrival_of_parts(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::arrival_of_parts)
{
    ui->setupUi(this);
}

arrival_of_parts::~arrival_of_parts()
{
    delete ui;
}
