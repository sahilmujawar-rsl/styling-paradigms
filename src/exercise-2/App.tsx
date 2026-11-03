import { Link } from 'react-router-dom'
import { Badge, Button, Card, type ButtonVariant } from './components'
import {
  app,
  badgeGroup,
  buttonGrid,
  buttonGroup,
  content,
  exerciseLink,
  section,
} from './components.css'
import { themeClass } from './theme.css'

const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'danger']

export default function ExerciseTwo() {
  return (
    <main className={`${app} ${themeClass}`}>
      <div className={content}>
        <h1>Reusable Components</h1>
        <Link className={exerciseLink} to="/exercise-1">
          Exercise 1
        </Link>
        <div className={section}>
          <Card title="Button variants and sizes">
            <div className={buttonGrid}>
              {buttonVariants.map((variant) => (
                <div className={buttonGroup} key={variant}>
                  <Button variant={variant} size="small">
                    {variant} small
                  </Button>
                  <Button variant={variant} size="large">
                    {variant} large
                  </Button>
                </div>
              ))}
            </div>
            <div className={`${buttonGroup} ${section}`}>
              <Button disabled>Disabled button</Button>
              <Button variant="secondary">Secondary button</Button>
            </div>
          </Card>
        </div>

        <div className={section}>
          <Card title="Badge variants">
            <div className={badgeGroup}>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
