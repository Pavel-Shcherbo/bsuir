package org.date.dateconverter.repository;

import org.date.dateconverter.models.TimeData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeDataRepository extends JpaRepository<TimeData, Long> {
}
