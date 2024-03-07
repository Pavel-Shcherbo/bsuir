package org.date.dateconverter.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Conversion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long timeInMillis;
    private String timeInCurrentTimeZone;
    private String timeInGMT;

    @OneToMany(mappedBy = "conversion", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // Игнорируем поле timeData при сериализации в JSON
    private Set<TimeData> timeData = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "conversion_time_entry",
            joinColumns = @JoinColumn(name = "conversion_id"),
            inverseJoinColumns = @JoinColumn(name = "time_entry_id")
    )
    private Set<TimeEntry> timeEntries = new HashSet<>();

    // Геттеры и сеттеры

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getTimeInMillis() {
        return timeInMillis;
    }

    public void setTimeInMillis(long timeInMillis) {
        this.timeInMillis = timeInMillis;
    }

    public String getTimeInCurrentTimeZone() {
        return timeInCurrentTimeZone;
    }

    public void setTimeInCurrentTimeZone(String timeInCurrentTimeZone) {
        this.timeInCurrentTimeZone = timeInCurrentTimeZone;
    }

    public String getTimeInGMT() {
        return timeInGMT;
    }

    public void setTimeInGMT(String timeInGMT) {
        this.timeInGMT = timeInGMT;
    }

    public Set<TimeData> getTimeData() {
        return timeData;
    }

    public void setTimeData(Set<TimeData> timeData) {
        this.timeData = timeData;
    }

    public void addTimeData(TimeData data) {
        timeData.add(data);
        data.setConversion(this);
    }

    public void removeTimeData(TimeData data) {
        timeData.remove(data);
        data.setConversion(null);
    }

    public Set<TimeEntry> getTimeEntries() {
        return timeEntries;
    }

    public void setTimeEntries(Set<TimeEntry> timeEntries) {
        this.timeEntries = timeEntries;
    }

    public void addTimeEntry(TimeEntry timeEntry) {
        timeEntries.add(timeEntry);
        timeEntry.getConversions().add(this);
    }

    public void removeTimeEntry(TimeEntry timeEntry) {
        timeEntries.remove(timeEntry);
        timeEntry.getConversions().remove(this);
    }
}
