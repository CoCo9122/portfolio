import { AboutSection } from "../organism/AboutSection";
import { AchievementsSection } from "../organism/AchievementsSection";
import { ContactSection } from "../organism/ContactSection";
import { ContentCreationSection } from "../organism/ContentCreationSection";
import { ExperienceSection } from "../organism/ExperienceSection";
import { FutureSection } from "../organism/FutureSection";
import { SkillsSection } from "../organism/SkillsSection";
import { MainLayout } from "../template/MainLayout";

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
