window.courseData = {
  title: 'Inventor Path',
  modules: [
    {
      id: 'foundations',
      title: 'Foundations: Input → Brain → Output',
      duration: 'Week 1',
      lessons: [
        {
          id: 'welcome',
          title: 'Welcome: You Are Inventors Now',
          duration: 20,
          summary: 'Understand microcontrollers, sensors, code, and the inventor mindset.',
          objectives: [
            'Explain what a microcontroller does.',
            'Describe sensors as machine senses.',
            'Explain why debugging is part of engineering.'
          ],
          activities: [
            'Name 3 smart devices you use daily.',
            'Map each device to input, brain, and output.',
            'Write one inventor mission statement.'
          ],
          quiz: {
            question: 'In a smart device, what is the “Brain”?',
            options: ['Microcontroller', 'LED light', 'Resistor'],
            answer: 0
          }
        },
        {
          id: 'formula',
          title: 'The Universal Formula',
          duration: 25,
          summary: 'Apply the Input → Brain → Output loop to any project.',
          objectives: [
            'Identify input components.',
            'Describe code decision logic.',
            'List common output actions.'
          ],
          activities: [
            'Choose one project idea.',
            'Write its input, brain logic, and output.',
            'Discuss what might fail first and why.'
          ]
        },
        {
          id: 'safety',
          title: 'Safety and Good Habits',
          duration: 20,
          summary: 'Learn power-off wiring, resistor safety, and tidy breadboard practice.',
          objectives: [
            'Apply power-off-before-wiring rule.',
            'Use resistor correctly with LEDs.',
            'Keep wiring organized for debugging.'
          ],
          activities: [
            'Create a 5-item safety checklist.',
            'Practice identifying unsafe wiring examples.',
            'Take a circuit photo after successful test.'
          ]
        }
      ]
    },
    {
      id: 'coding',
      title: 'Coding + Electronics Basics',
      duration: 'Week 2-3',
      lessons: [
        {
          id: 'arduino-structure',
          title: 'setup() and loop()',
          duration: 30,
          summary: 'Learn Arduino C++ program structure and pin control.',
          objectives: [
            'Explain setup vs loop.',
            'Use pinMode, digitalWrite, and digitalRead.',
            'Use if/else for decision making.'
          ],
          activities: [
            'Write a blink sketch.',
            'Modify blink speed using delay.',
            'Add a button condition to control LED.'
          ]
        },
        {
          id: 'electricity',
          title: 'Electricity, Resistors, and LEDs',
          duration: 35,
          summary: 'Understand voltage/current/resistance and safe LED circuits.',
          objectives: [
            'State Ohm’s law in plain words.',
            'Identify LED polarity.',
            'Choose common resistor values.'
          ],
          activities: [
            'Label an LED circuit diagram.',
            'Test 220Ω vs 330Ω brightness.',
            'Explain why no resistor is dangerous.'
          ]
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects: From Simple to Smart',
      duration: 'Week 4-6',
      lessons: [
        {
          id: 'motion-alarm',
          title: 'Motion Sensor Alarm',
          duration: 45,
          summary: 'Use PIR input to trigger buzzer and light outputs.',
          objectives: [
            'Read a digital sensor.',
            'Implement threshold behavior.',
            'Debug false triggers.'
          ],
          activities: [
            'Wire PIR + buzzer + LED.',
            'Upload alarm sketch.',
            'Tune delay and sensor behavior.'
          ]
        },
        {
          id: 'wifi-dashboard',
          title: 'Wi‑Fi Weather Dashboard',
          duration: 50,
          summary: 'Use ESP32 connectivity to fetch and display weather data.',
          objectives: [
            'Connect ESP32 to Wi‑Fi.',
            'Understand API request/response basics.',
            'Display data for user feedback.'
          ],
          activities: [
            'Connect to local Wi‑Fi.',
            'Call weather API endpoint.',
            'Show result in serial monitor or display.'
          ]
        },
        {
          id: 'ai-concept',
          title: 'Mini AI Smart Assistant (Concept)',
          duration: 60,
          summary: 'Learn how sensor/voice input can trigger cloud AI-driven actions.',
          objectives: [
            'Describe data → model → output flow.',
            'Explain API-mediated AI actions.',
            'Design a safe prototype command loop.'
          ],
          activities: [
            'Draw voice-command architecture.',
            'Define two supported commands.',
            'Simulate command parsing in pseudocode.'
          ]
        }
      ]
    }
  ]
};
