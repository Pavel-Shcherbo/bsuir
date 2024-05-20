#include "list_of_parts.h"
#include "ui_list_of_parts.h"

list_of_parts::list_of_parts(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::list_of_parts)
{
    ui->setupUi(this);
}

list_of_parts::~list_of_parts()
{
    delete ui;
}
