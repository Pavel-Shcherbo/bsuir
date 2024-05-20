#include "engine_types.h"
#include "ui_engine_types.h"

engine_types::engine_types(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::engine_types)
{
    ui->setupUi(this);
}

engine_types::~engine_types()
{
    delete ui;
}
