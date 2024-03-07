package org.date.dateconverter.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TimeData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime localTime;
    private LocalDateTime gmtTime;

    @ManyToOne
    @JoinColumn(name = "conversion_id")
    @JsonIgnore // Игнорируем поле conversion при сериализации в JSON
    private Conversion conversion;

    // Геттеры и сеттеры
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getLocalTime() {
        return localTime;
    }

    public void setLocalTime(LocalDateTime localTime) {
        this.localTime = localTime;
    }

    public LocalDateTime getGmtTime() {
        return gmtTime;
    }

    public void setGmtTime(LocalDateTime gmtTime) {
        this.gmtTime = gmtTime;
    }

    public Conversion getConversion() {
        return conversion;
    }

    public void setConversion(Conversion conversion) {
        this.conversion = conversion;
    }

    public void setTimeEntry(TimeEntry timeEntry) {
    }
}
