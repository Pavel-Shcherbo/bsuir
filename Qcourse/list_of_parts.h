#ifndef LIST_OF_PARTS_H
#define LIST_OF_PARTS_H

#include <QDialog>

namespace Ui {
class list_of_parts;
}

class list_of_parts : public QDialog
{
    Q_OBJECT

public:
    explicit list_of_parts(QWidget *parent = nullptr);
    ~list_of_parts();

private:
    Ui::list_of_parts *ui;
};

#endif // LIST_OF_PARTS_H
