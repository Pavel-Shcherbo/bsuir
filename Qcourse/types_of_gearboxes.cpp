#include "types_of_gearboxes.h"
#include "ui_types_of_gearboxes.h"

types_of_gearboxes::types_of_gearboxes(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::types_of_gearboxes)
{
    ui->setupUi(this);
}

types_of_gearboxes::~types_of_gearboxes()
{
    delete ui;
}
