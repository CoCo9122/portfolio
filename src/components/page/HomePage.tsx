import { MainLayout } from "../template/MainLayout";
import { AboutSection } from "../organism/AboutSection";
import { SkillsSection } from "../organism/SkillsSection";
import { ExperienceSection } from "../organism/ExperienceSection";
import { ContentCreationSection } from "../organism/ContentCreationSection";
import { AchievementsSection } from "../organism/AchievementsSection";
import { FutureSection } from "../organism/FutureSection";
import { ContactSection } from "../organism/ContactSection";

export const HomePage = () => {
	return (
		<MainLayout>
			<AboutSection />
			<SkillsSection />
			<ExperienceSection />
			<ContentCreationSection />
			<AchievementsSection />
			<FutureSection />
			<ContactSection />
		</MainLayout>
	);
};
