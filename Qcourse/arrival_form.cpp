#include "arrival_form.h"
#include "ui_arrival_form.h"

arrival_form::arrival_form(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::arrival_form)
{
    ui->setupUi(this);
}

arrival_form::~arrival_form()
{
    delete ui;
}
