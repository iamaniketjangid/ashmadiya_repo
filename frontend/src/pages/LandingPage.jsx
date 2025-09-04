import React from "react";
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h2>Our CI/CD Approach</h2>

      <section className={styles.section}>
        <h3>Goal</h3>
        <p>
          Demonstrate automated build, test, and deployment of both frontend and
          backend to AWS using a pipeline. Show role-based access with IAM
          policies.
        </p>
      </section>

      <section className={styles.section}>
        <h3>High level architecture</h3>
        <ol>
          <li>Source: GitHub (frontend & backend repos / mono-repo)</li>
          <li>CI: AWS CodeBuild (build & test)</li>
          <li>Monitoring: CloudWatch logs & health events</li>
        </ol>
      </section>

      <section className={styles.section}>
        <h3>IAM & Security (Demo)</h3>
        <ul>
          <li>
            CodePipeline role — allows pipeline to start builds and deploy
            artifacts.
          </li>
          <li>
            CodeBuild role — allows building the application, pushing Docker
            images (if used) to ECR, and writing logs to CloudWatch.
          </li>
          <li>
            EC2 Instance role — attached to the EC2 instance; allows pulling
            artifacts from S3, reading secrets, and writing logs to CloudWatch.
          </li>
          <li>
            Developer user — limited permissions (push to repo, trigger pipeline
            manually, but no admin privileges).
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Demo Steps</h3>
        <ol>
          <li>Push code to GitHub → triggers pipeline.</li>
          <li>CodeBuild runs `npm install`, `npm test`, builds artifact.</li>
          <li>
            Pipeline deploys updated frontend & backend to AWS environment.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default LandingPage;
