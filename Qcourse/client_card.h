#ifndef CLIENT_CARD_H
#define CLIENT_CARD_H

#include <QDialog>

namespace Ui {
class client_card;
}

class client_card : public QDialog
{
    Q_OBJECT

public:
    explicit client_card(QWidget *parent = nullptr);
    ~client_card();

private:
    Ui::client_card *ui;
};

#endif // CLIENT_CARD_H
