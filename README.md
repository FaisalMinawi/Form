# Multi-step Form

A responsive multi-step form implementation using React and Tailwind CSS.

## Features

- Multi-step form navigation
- Form validation
- Responsive design (mobile & desktop)
- Plan selection with monthly/yearly billing
- Add-ons selection
- Order summary
- Context-based state management

## Technologies Used

- React
- Tailwind CSS
- Vite

## Setup

1. Clone the repository:
```bash
git clone https://github.com/FaisalMinawi/Form.git
cd Form
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/
│   ├── images/
│   └── fonts/
├── components/
│   ├── layout/
│   │   └── FormLayout.jsx
│   └── steps/
│       ├── PersonalInfo.jsx
│       ├── SelectPlan.jsx
│       ├── AddOns.jsx
│       ├── Summary.jsx
│       └── ThankYou.jsx
├── context/
│   └── FormContext.jsx
└── App.jsx
```

## License

MIT
