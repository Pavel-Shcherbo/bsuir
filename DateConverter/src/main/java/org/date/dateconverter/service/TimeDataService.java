package org.date.dateconverter.service;

import org.date.dateconverter.models.TimeData;
import org.date.dateconverter.models.TimeEntry;
import org.date.dateconverter.repository.TimeDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TimeDataService {

    private final TimeDataRepository timeDataRepository;

    @Autowired
    public TimeDataService(TimeDataRepository timeDataRepository) {
        this.timeDataRepository = timeDataRepository;
    }

    public TimeData createTimeData(long timeEntryId, LocalDateTime localTime, LocalDateTime gmtTime) {
        TimeData timeData = new TimeData();
        timeData.setLocalTime(localTime);
        timeData.setGmtTime(gmtTime);

        TimeEntry timeEntry = new TimeEntry();
        timeEntry.setId(timeEntryId);
        timeData.setTimeEntry(timeEntry);

        return timeDataRepository.save(timeData);
    }
}
