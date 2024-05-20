#ifndef ENGINE_TYPES_H
#define ENGINE_TYPES_H

#include <QDialog>

namespace Ui {
class engine_types;
}

class engine_types : public QDialog
{
    Q_OBJECT

public:
    explicit engine_types(QWidget *parent = nullptr);
    ~engine_types();

private:
    Ui::engine_types *ui;
};

#endif // ENGINE_TYPES_H
