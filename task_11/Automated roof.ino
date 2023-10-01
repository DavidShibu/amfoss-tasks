#include <Wire.h>
#include <Adafruit_LiquidCrystal.h>
#include <Servo.h>

Servo myServo;
Adafruit_LiquidCrystal lcd_1(0); // Adjust the address if necessary

const int ldrPin = A0;

int ldrValue;

void setup() {
  lcd_1.begin(16, 2);
  lcd_1.setBacklight(1);
  
  myServo.attach(9);
}

void loop() {
  lcd_1.setCursor(0, 1);
  ldrValue = analogRead(ldrPin);
  if (ldrValue < 500) {
    lcd_1.clear();
    lcd_1.print("ROOF OPEN");
    myServo.write(90); // Assuming 90 degrees opens the roof, adjust if necessary
  } else {
    lcd_1.clear();
    lcd_1.print("ROOF CLOSED");
    myServo.write(0); // Assuming 0 degrees closes the roof, adjust if necessary
  }
  
  delay(10000); // Adjust delay as needed
}

