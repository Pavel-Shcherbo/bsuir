#ifndef SERVICE_GROUPS_H
#define SERVICE_GROUPS_H

#include <QDialog>

namespace Ui {
class service_groups;
}

class service_groups : public QDialog
{
    Q_OBJECT

public:
    explicit service_groups(QWidget *parent = nullptr);
    ~service_groups();

private:
    Ui::service_groups *ui;
};

#endif // SERVICE_GROUPS_H
