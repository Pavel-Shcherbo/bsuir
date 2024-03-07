package org.date.dateconverter.service;

import org.date.dateconverter.models.Conversion;
import org.date.dateconverter.repository.ConversionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConversionService {

    private final ConversionRepository conversionRepository;

    @Autowired
    public ConversionService(ConversionRepository conversionRepository) {
        this.conversionRepository = conversionRepository;
    }

    public List<Conversion> getAllConversions() {
        return conversionRepository.findAll();
    }

    public Optional<Conversion> getConversionById(Long id) {
        return conversionRepository.findById(id);
    }

    public Conversion createConversion(Conversion conversion) {
        return conversionRepository.save(conversion);
    }

    public void updateConversion(Conversion conversion) {
        conversionRepository.save(conversion);
    }

    public void deleteConversionById(Long id) {
        conversionRepository.deleteById(id);
    }
}
