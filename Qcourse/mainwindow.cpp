#include "./mainwindow.h"
#include "./ui_mainwindow.h"
#include <QString>
#include <string>
#include <QDebug>
#include "types_of_gearboxes.h"
#include "service_groups.h"
#include "list_of_parts.h"
#include "list_of_service.h"
#include "group_of_parts.h"
#include "engine_types.h"
#include "stock_balance.h"
#include "arrival_of_parts.h"
#include "list_of_orders.h"
#include "client_card.h"
#include "list_of_client.h"
#include "record_window.h"


MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_click_clicked()
{
    // ваш код для обработки нажатия кнопки
}

// Добавьте следующий метод
void MainWindow::on_pushButton_8_clicked()
{
    // ваш код для обработки нажатия кнопки с именем pushButton_8
}

void MainWindow::on_types_of_gearbox_clicked()
{
    types_of_gearboxes types_of_gearboxes;
    types_of_gearboxes.setModal(true);
    types_of_gearboxes.exec();
}

void MainWindow::on_service_groups_clicked()
{
    service_groups service_groups;
    service_groups.setModal(true);
    service_groups.exec();
}




void MainWindow::on_list_of_parts_clicked()
{
    list_of_parts list_of_parts;
    list_of_parts.setModal(true);
    list_of_parts.exec();
}


void MainWindow::on_list_of_services_clicked()
{
    list_of_service list_of_service;
    list_of_service.setModal(true);
    list_of_service.exec();
}


void MainWindow::on_group_of_parts_clicked()
{
    group_of_parts group_of_parts;
    group_of_parts.setModal(true);
    group_of_parts.exec();
}


void MainWindow::on_engine_types_clicked()
{
    engine_types engine_types;
    engine_types.setModal(true);
    engine_types.exec();
}


void MainWindow::on_stock_balance_clicked()
{
    stock_balance stock_balance;
    stock_balance.setModal(true);
    stock_balance.exec();
}


void MainWindow::on_arrival_of_parts_clicked()
{
    arrival_of_parts arrival_of_parts;
    arrival_of_parts.setModal(true);
    arrival_of_parts.exec();
}


void MainWindow::on_list_of_orders_clicked()
{
    list_of_orders list_of_orders;
    list_of_orders.setModal(true);
    list_of_orders.exec();
}


void MainWindow::on_client_card_clicked()
{
    client_card client_card;
    client_card.setModal(true);
    client_card.exec();
}


void MainWindow::on_list_of_client_clicked()
{
    list_of_client list_of_client;
    list_of_client.setModal(true);
    list_of_client.exec();

}


void MainWindow::on_record_window_clicked()
{
    record_window record_window;
    record_window.setModal(true);
    record_window.exec();
}

