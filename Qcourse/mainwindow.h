#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_click_clicked();

    void on_pushButton_8_clicked();

    void on_types_of_gearbox_clicked();

    void on_service_groups_clicked();

    void on_list_of_parts_clicked();

    void on_list_of_services_clicked();

    void on_group_of_parts_clicked();

    void on_engine_types_clicked();

    void on_stock_balance_clicked();

    void on_arrival_of_parts_clicked();

    void on_list_of_orders_clicked();

    void on_client_card_clicked();

    void on_list_of_client_clicked();

    void on_record_window_clicked();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
