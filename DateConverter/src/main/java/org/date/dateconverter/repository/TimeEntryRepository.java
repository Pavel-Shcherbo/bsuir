package org.date.dateconverter.repository;

import org.date.dateconverter.models.TimeEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeEntryRepository extends JpaRepository<TimeEntry, Long> {
}
