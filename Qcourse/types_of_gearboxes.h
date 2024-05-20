#ifndef TYPES_OF_GEARBOXES_H
#define TYPES_OF_GEARBOXES_H

#include <QDialog>

namespace Ui {
class types_of_gearboxes;
}

class types_of_gearboxes : public QDialog
{
    Q_OBJECT

public:
    explicit types_of_gearboxes(QWidget *parent = nullptr);
    ~types_of_gearboxes();

private:
    Ui::types_of_gearboxes *ui;
};

#endif // TYPES_OF_GEARBOXES_H
