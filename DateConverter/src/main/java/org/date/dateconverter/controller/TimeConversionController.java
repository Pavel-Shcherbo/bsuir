package org.date.dateconverter.controller;

import org.date.dateconverter.dto.TimeConversionDTO;
import org.date.dateconverter.service.TimeConversionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeConversionController {

    private final TimeConversionService timeConversionService;

    public TimeConversionController(TimeConversionService timeConversionService) {
        this.timeConversionService = timeConversionService;
    }

    @GetMapping("/convert")
    public ResponseEntity<TimeConversionDTO> convertTime(@RequestParam long milliseconds) {
        TimeConversionDTO result = timeConversionService.convertTime(milliseconds);
        return ResponseEntity.ok().body(result);
    }
}
