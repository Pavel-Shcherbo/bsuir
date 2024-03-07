package org.date.dateconverter.service;

import org.date.dateconverter.dto.TimeConversionDTO;
import org.date.dateconverter.models.Conversion;
import org.date.dateconverter.models.TimeData;
import org.date.dateconverter.models.TimeEntry;
import org.date.dateconverter.repository.ConversionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@Service
public class TimeConversionService {

    private final ConversionRepository conversionRepository;
    private final TimeEntryService timeEntryService;

    @Autowired
    public TimeConversionService(ConversionRepository conversionRepository,
                                 TimeEntryService timeEntryService) {
        this.conversionRepository = conversionRepository;
        this.timeEntryService = timeEntryService;
    }

    @Transactional
    public TimeConversionDTO convertTime(long milliseconds) {
        Map<String, String> result = convertTimeToString(milliseconds);
        Conversion conversion = saveConversionResult(milliseconds, result);
        System.out.println("Conversion saved with ID: " + conversion.getId());
        return new TimeConversionDTO(conversion.getTimeInCurrentTimeZone(), conversion.getTimeInGMT());
    }

    private Map<String, String> convertTimeToString(long milliseconds) {
        Instant instant = Instant.ofEpochMilli(milliseconds);
        LocalDateTime localDateTime = LocalDateTime.ofInstant(instant, ZoneId.systemDefault());
        LocalDateTime gmtDateTime = LocalDateTime.ofInstant(instant, ZoneId.of("GMT"));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return Map.of(
                "local_time", localDateTime.format(formatter),
                "gmt_time", gmtDateTime.format(formatter)
        );
    }

    private Conversion saveConversionResult(long milliseconds, Map<String, String> result) {
        TimeEntry timeEntry = timeEntryService.createTimeEntry(milliseconds);

        LocalDateTime localDateTime = LocalDateTime.parse(result.get("local_time"), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        LocalDateTime gmtDateTime = LocalDateTime.parse(result.get("gmt_time"), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        TimeData timeData = new TimeData();
        timeData.setLocalTime(localDateTime);
        timeData.setGmtTime(gmtDateTime);

        Conversion conversion = new Conversion();
        conversion.setTimeInMillis(milliseconds);
        conversion.setTimeInCurrentTimeZone(result.get("local_time"));
        conversion.setTimeInGMT(result.get("gmt_time"));

        conversion.addTimeData(timeData);
        conversion.addTimeEntry(timeEntry);

        return conversionRepository.save(conversion);
    }
}
