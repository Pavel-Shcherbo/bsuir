package org.date.dateconverter.repository;

import org.date.dateconverter.models.Conversion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversionRepository extends JpaRepository<Conversion, Long> {
}
