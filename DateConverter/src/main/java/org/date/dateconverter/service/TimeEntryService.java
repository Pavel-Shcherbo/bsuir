package org.date.dateconverter.service;

import org.date.dateconverter.models.TimeEntry;
import org.date.dateconverter.repository.TimeEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeEntryService {

    private final TimeEntryRepository timeEntryRepository;

    @Autowired
    public TimeEntryService(TimeEntryRepository timeEntryRepository) {
        this.timeEntryRepository = timeEntryRepository;
    }

    public List<TimeEntry> getAllTimeEntries() {
        return timeEntryRepository.findAll();
    }

    public Optional<TimeEntry> getTimeEntryById(Long id) {
        return timeEntryRepository.findById(id);
    }

    public TimeEntry createTimeEntry(long milliseconds) {
        TimeEntry timeEntry = new TimeEntry();
        timeEntry.setMilliseconds(milliseconds);
        return timeEntryRepository.save(timeEntry);
    }

    public void updateTimeEntry(TimeEntry timeEntry) {
        timeEntryRepository.save(timeEntry);
    }

    public void deleteTimeEntryById(Long id) {
        timeEntryRepository.deleteById(id);
    }
}
