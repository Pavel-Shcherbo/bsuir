#ifndef GROUP_OF_PARTS_H
#define GROUP_OF_PARTS_H

#include <QDialog>

namespace Ui {
class group_of_parts;
}

class group_of_parts : public QDialog
{
    Q_OBJECT

public:
    explicit group_of_parts(QWidget *parent = nullptr);
    ~group_of_parts();

private:
    Ui::group_of_parts *ui;
};

#endif // GROUP_OF_PARTS_H
