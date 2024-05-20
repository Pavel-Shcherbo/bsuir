#include "group_of_parts.h"
#include "ui_group_of_parts.h"

group_of_parts::group_of_parts(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::group_of_parts)
{
    ui->setupUi(this);
}

group_of_parts::~group_of_parts()
{
    delete ui;
}
