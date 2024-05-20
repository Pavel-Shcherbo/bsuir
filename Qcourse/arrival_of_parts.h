#ifndef ARRIVAL_OF_PARTS_H
#define ARRIVAL_OF_PARTS_H

#include <QDialog>

namespace Ui {
class arrival_of_parts;
}

class arrival_of_parts : public QDialog
{
    Q_OBJECT

public:
    explicit arrival_of_parts(QWidget *parent = nullptr);
    ~arrival_of_parts();

private:
    Ui::arrival_of_parts *ui;
};

#endif // ARRIVAL_OF_PARTS_H
