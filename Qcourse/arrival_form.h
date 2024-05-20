#ifndef ARRIVAL_FORM_H
#define ARRIVAL_FORM_H

#include <QDialog>

namespace Ui {
class arrival_form;
}

class arrival_form : public QDialog
{
    Q_OBJECT

public:
    explicit arrival_form(QWidget *parent = nullptr);
    ~arrival_form();

private:
    Ui::arrival_form *ui;
};

#endif // ARRIVAL_FORM_H
