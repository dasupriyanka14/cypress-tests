# Cypress Test Automation Framework

A comprehensive test automation framework built with Cypress, Cucumber BDD, and Page Object Model for both UI and API testing.

## 🚀 Features

- **Cucumber BDD**: Behavior-driven development with Gherkin syntax
- **Page Object Model**: Maintainable and reusable UI test structure
- **API Testing**: Complete CRUD operations testing
- **Reporting**: Mochawesome HTML reports with screenshots and videos
- **Video Recording**: Automatic video capture on test failures
- **Screenshots**: Screenshot capture on test failures
- **Command Line Execution**: Easy CLI test execution
- **Separate UI/API Structure**: Organized test directories

## 📁 Project Structure

```
cypress-bdd-framework/
├── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   ├── features/
│   │   │   │   ├── login.feature
│   │   │   │   └── navigation.feature
│   │   │   ├── page-objects/
│   │   │   │   ├── LoginPage.js
│   │   │   │   └── NavigationPage.js
│   │   │   └── step-definitions/
│   │   │       ├── login.steps.js
│   │   │       └── navigation.steps.js
│   │   └── api/
│   │       ├── features/
│   │       │   └── pet-api.feature
│   │       └── step-definitions/
│   │           └── pet-api.steps.js
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js
│   ├── results/
│   ├── reports/
│   └── videos/
├── package.json
├── cypress.config.js
├── cypress/reporter-config.json
└── README.md
```

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cypress-bdd-framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress verify
   ```

## 🏃‍♂️ Running Tests

### Open Cypress Test Runner
```bash
npm run cypress:open
```

### Run All Tests
```bash
npm run test:all
```

### Run UI Tests Only
```bash
npm run test:ui
```

### Run API Tests Only
```bash
npm run test:api
```

### Run Tests with Specific Tags
```bash
# Run smoke tests
npx cypress run --env grepTags="@smoke"

# Run login tests
npx cypress run --env grepTags="@login"

# Run API tests
npx cypress run --env grepTags="@api"
```

## 📊 Test Reports

### Generate Reports
```bash
# Generate reports after test execution
npm run posttest

# Generate reports manually
npm run report:generate

# Clean reports
npm run report:clean
```

### View Reports
After test execution, HTML reports are generated in `cypress/reports/` directory.

## 🧪 Test Scenarios

### UI Tests (Magento Website)

#### Login Feature
- ✅ Successful login with valid credentials
- ✅ Error message on invalid login
- ✅ Error message on empty credentials
- ✅ Logout functionality

#### Navigation Feature
- ✅ Navigate to Men → Tops → Jackets
- ✅ Sort by SIZE "L"
- ✅ Select first item and add to cart
- ✅ Verify item is added to cart
- ✅ Remove item from cart

### API Tests (Pet Store API)

#### CRUD Operations
- ✅ **Create**: Add new pet
- ✅ **Read**: Get pet by ID
- ✅ **Update**: Update pet information
- ✅ **Delete**: Delete pet by ID
- ✅ Complete CRUD flow
- ✅ Negative scenarios (404 errors)

## 🏗️ Framework Components

### Page Object Model
- **LoginPage.js**: Handles login/logout operations
- **NavigationPage.js**: Manages navigation and shopping cart

### Custom Commands
- `cy.login()`: Login with credentials
- `cy.logout()`: Logout from application
- `cy.waitForPageLoad()`: Wait for page to load
- `cy.clearCart()`: Clear shopping cart

### API Testing
- RESTful API testing with Cypress
- CRUD operations validation
- Error handling and assertions

## 🔧 Configuration

### Cypress Configuration
- Base URL: `https://magento.softwaretestingboard.com`
- API Base URL: `https://petstore.swagger.io/v2`
- Viewport: 1280x720
- Video recording: Enabled
- Screenshots: On failure
- Timeouts: 10 seconds

### Reporter Configuration
- **Mochawesome**: HTML reports with embedded screenshots
- **Video Recording**: Automatic capture on failures
- **JSON Reports**: For CI/CD integration

## 🏷️ Test Tags

- `@smoke`: Critical test scenarios
- `@login`: Login-related tests
- `@navigation`: Navigation and cart tests
- `@api`: API testing scenarios
- `@negative`: Negative test scenarios
- `@crud`: CRUD operation tests

## 📝 Writing Tests

### Adding New UI Tests
1. Create feature file in `cypress/e2e/ui/features/`
2. Create page object in `cypress/e2e/ui/page-objects/`
3. Create step definitions in `cypress/e2e/ui/step-definitions/`

### Adding New API Tests
1. Create feature file in `cypress/e2e/api/features/`
2. Create step definitions in `cypress/e2e/api/step-definitions/`

### Example Feature File
```gherkin
Feature: Example Feature
  As a user
  I want to perform some action
  So that I can achieve some goal

  @smoke
  Scenario: Example scenario
    Given I am on the page
    When I perform an action
    Then I should see expected result
```

## 🐛 Troubleshooting

### Common Issues

1. **Cypress not found**
   ```bash
   npm install cypress --save-dev
   ```

2. **Cucumber preprocessor issues**
   ```bash
   npm install @badeball/cypress-cucumber-preprocessor
   ```

3. **Report generation fails**
   ```bash
   npm install mochawesome mochawesome-merge mochawesome-report-generator
   ```

### Debug Mode
```bash
# Run with debug logging
DEBUG=cypress:* npm run test:all
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Happy Testing! 🧪✨** 