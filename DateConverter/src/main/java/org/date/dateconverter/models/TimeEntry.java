package org.date.dateconverter.models;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class TimeEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long milliseconds;

    @ManyToMany(mappedBy = "timeEntries")
    private Set<Conversion> conversions = new HashSet<>();

    // Геттеры и сеттеры

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getMilliseconds() {
        return milliseconds;
    }

    public void setMilliseconds(long milliseconds) {
        this.milliseconds = milliseconds;
    }

    public Set<Conversion> getConversions() {
        return conversions;
    }

    public void setConversions(Set<Conversion> conversions) {
        this.conversions = conversions;
    }
}
