#ifndef RECORD_WINDOW_H
#define RECORD_WINDOW_H

#include <QDialog>

namespace Ui {
class record_window;
}

class record_window : public QDialog
{
    Q_OBJECT

public:
    explicit record_window(QWidget *parent = nullptr);
    ~record_window();

private:
    Ui::record_window *ui;
};

#endif // RECORD_WINDOW_H
