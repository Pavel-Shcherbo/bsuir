QT       += core gui sql

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

CONFIG += c++17

# You can make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

SOURCES += \
    arrival_form.cpp \
    arrival_of_parts.cpp \
    client_card.cpp \
    engine_types.cpp \
    group_of_parts.cpp \
    list_of_client.cpp \
    list_of_orders.cpp \
    list_of_parts.cpp \
    list_of_service.cpp \
    main.cpp \
    mainwindow.cpp \
    record_window.cpp \
    service_groups.cpp \
    stock_balance.cpp \
    types_of_gearboxes.cpp

HEADERS += \
    arrival_form.h \
    arrival_of_parts.h \
    client_card.h \
    engine_types.h \
    group_of_parts.h \
    list_of_client.h \
    list_of_orders.h \
    list_of_parts.h \
    list_of_service.h \
    mainwindow.h \
    record_window.h \
    service_groups.h \
    stock_balance.h \
    types_of_gearboxes.h

FORMS += \
    arrival_form.ui \
    arrival_of_parts.ui \
    client_card.ui \
    engine_types.ui \
    group_of_parts.ui \
    list_of_client.ui \
    list_of_orders.ui \
    list_of_parts.ui \
    list_of_service.ui \
    mainwindow.ui \
    record_window.ui \
    service_groups.ui \
    stock_balance.ui \
    types_of_gearboxes.ui

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target
