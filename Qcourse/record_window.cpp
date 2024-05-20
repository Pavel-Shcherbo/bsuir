#include "record_window.h"
#include "ui_record_window.h"

record_window::record_window(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::record_window)
{
    ui->setupUi(this);
}

record_window::~record_window()
{
    delete ui;
}
