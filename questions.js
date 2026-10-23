// Shared ASWB-style question bank for Ribbit Quest (index.html) and practice mode (practice/).
// Each option is [answer, why]; c is the index of the best answer. Ids must never change: saved progress uses them.
window.RIBBIT_Q = /* Q-START */ [
    // ---------------- Values & Ethics ----------------
    { id: "e1", cat: "ethics",
      text: "At their last session, a client who has worked with a social worker for a year gives her a small handmade bracelet. In the client's culture, a small gift is a common way to say thank you. The agency has no gift policy.",
      ask: "What is the BEST response?",
      opts: [
        ["Thank the client warmly, accept the bracelet, and note it in the record.", "A small gift with cultural meaning, given as services end, can usually be accepted. Refusing it could feel like rejecting the client and her culture. Writing it down keeps things transparent."],
        ["Kindly decline and explain that professional rules don't allow gifts from clients.", "There's no blanket ban on small gifts. Refusing here could hurt the relationship right when you're trying to end it well."],
        ["Accept the bracelet and give the client a small gift in return so it feels even.", "Trading gifts turns it into a social exchange. Receiving graciously is enough."],
        ["Accept the bracelet and let the client know she's welcome to stay in touch as a friend.", "Becoming friends after services end creates a dual relationship. Keep the ending professional."]
      ],
      c: 0,
      tip: "Small gift + cultural meaning + end of services = usually okay to accept. Expensive gifts or strings attached are not." },

    { id: "e2", cat: "ethics",
      text: "A client tells his social worker that he bought a handgun last week. He says he will shoot his former business partner, whom he names, when he sees him at a meeting on Friday. He refuses to talk about it further.",
      ask: "Which action BEST meets the social worker's legal and ethical duties?",
      opts: [
        ["Warn the partner and notify the police, following state law.", "This is a serious, foreseeable, and imminent threat against a named person, and he has the means. Confidentiality gives way when disclosure is needed to prevent serious harm (the Tarasoff principle)."],
        ["Keep this confidential and focus the next sessions on his anger toward his partner.", "Confidentiality isn't absolute. A weapon, a named victim, and a date call for protective action now."],
        ["Wait to see whether he repeats the threat at the next session before acting.", "Friday is days away. Waiting could cost someone their life."],
        ["Ask the client to sign a release before contacting anyone about the threat.", "You don't need the client's permission to act when someone faces serious, imminent harm."]
      ],
      c: 0,
      tip: "Specific threat + identifiable victim + means + timeline = duty to protect. Safety beats confidentiality." },

    { id: "e3", cat: "ethics",
      text: "A social worker notices that a coworker has smelled of alcohol at several morning meetings. The coworker has also missed two client appointments this month.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Report the coworker to the state licensing board.", "Outside reporting comes later, if talking with the coworker and using agency channels don't fix the problem."],
        ["Talk privately with the coworker about the concerns.", "When it's feasible, the Code asks social workers to first talk with an impaired colleague and help them take steps to address it. If that doesn't work, go through proper channels."],
        ["Tell the agency director about the coworker's drinking.", "Going to a supervisor or director is the next step if the direct conversation doesn't lead to change, unless clients are in immediate danger."],
        ["Let the coworker's clients know they can ask for a new worker.", "This breaks the coworker's privacy and skips every appropriate step."]
      ],
      c: 1,
      tip: "Colleague problem? Go to the colleague first, then the supervisor or agency, then outside bodies." },

    { id: "e4", cat: "ethics",
      text: "A client who is a real estate agent learns that her social worker is house hunting. She offers to help the social worker find a home and to cut her commission as a thank-you.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept her help, but insist on paying the full commission so it stays fair.", "Paying full price doesn't solve it. It's still a business relationship with a current client."],
        ["Decline the offer kindly and keep the relationship professional.", "A business deal with a current client is a dual relationship that risks exploitation and blurs the work. It's avoidable here, so avoid it, kindly."],
        ["Accept the offer, since the client suggested it and seems happy to help.", "Who suggests it doesn't matter. The social worker is responsible for setting boundaries."],
        ["Wait until services end, then hire the client as an agent.", "Business with a former client still risks exploitation and can blur the boundaries of the past work."]
      ],
      c: 1,
      tip: "Avoidable dual relationship? Avoid it. The social worker always owns the boundary." },

    { id: "e5", cat: "ethics",
      text: "At intake, a 15-year-old client, her mother, and the social worker agreed that what the teen says in sessions stays private unless there's a safety concern. A month later, the mother calls and asks what her daughter has been talking about.",
      ask: "What is the BEST response?",
      opts: [
        ["Share a brief summary of the sessions, since the mother is the teen's legal guardian.", "Breaking the agreement without a safety concern would damage the teen's trust and the work."],
        ["Remind the mother of the agreement and invite her to share her concerns.", "Keep the confidentiality agreement made at intake while still listening to the parent. You can also offer a family session if the teen agrees."],
        ["Decline to talk with the mother and end the call politely.", "Parents are part of a minor's support system. You can listen to her without sharing what the teen said."],
        ["Ask the teen to tell her mother what they talk about in sessions.", "That pressures the teen and undercuts the privacy everyone agreed to."]
      ],
      c: 1,
      tip: "With minors, set confidentiality limits with everyone at the start, then keep the agreement. Safety is the exception." },

    { id: "e6", cat: "ethics",
      text: "A social worker receives a subpoena for a client's records. It comes from the attorney for the client's ex-husband in a custody case.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Send the records, since a subpoena is a legal order.", "A subpoena is not a court order. Don't release records without the client's consent or a judge's order."],
        ["Contact the client about the subpoena and discuss her wishes.", "The privilege belongs to the client. Tell her, talk through her wishes, and get legal advice if needed. Don't release anything yet."],
        ["Ignore the subpoena, since client records are confidential.", "You must respond to a subpoena. Responding can mean asserting privilege on the client's behalf, not handing over records."],
        ["Remove sensitive notes from the file before anything is sent.", "Altering records is unethical and can be illegal."]
      ],
      c: 1,
      tip: "A subpoena isn't a court order. Contact the client first. Release only with consent or a judge's order." },

    { id: "e7", cat: "ethics",
      text: "An 84-year-old man lives alone. He's mentally sharp, manages his own medications, and keeps his home safe, though cluttered. His adult children want him to move to assisted living. He wants to stay home.",
      ask: "What should the social worker do?",
      opts: [
        ["Support his choice and explore services that help him stay safely at home.", "He has capacity and isn't in danger, so his right to self-determination comes first. Supportive services respect his choice."],
        ["Help the children find an assisted living facility he might like.", "This works around his clearly stated wishes."],
        ["Request a capacity evaluation before honoring his decision.", "Nothing here suggests impaired capacity. Age alone isn't a reason to question it."],
        ["Hold a family meeting so his children can persuade him that moving is safer.", "A family meeting can help, but not to talk a capable adult out of his own choice."]
      ],
      c: 0,
      tip: "Capable adult + no serious danger = the client decides." },

    { id: "e8", cat: "ethics",
      text: "A woman who speaks limited English comes in for her first appointment. Her 12-year-old son, who speaks English well, offers to interpret.",
      ask: "What should the social worker do?",
      opts: [
        ["Accept the son's offer, since his mother seems comfortable with him.", "Children shouldn't interpret. It burdens them, and the mother may hold back sensitive information."],
        ["Arrange for a qualified professional interpreter.", "Informed consent requires that the client truly understands. A trained interpreter is accurate, neutral, and bound by confidentiality."],
        ["Speak slowly in simple English and give her written handouts.", "Simplified English doesn't make sure she understands, so it isn't true informed consent."],
        ["Reschedule until the client can bring an adult relative to interpret.", "Relatives aren't neutral or trained, and this delays services."]
      ],
      c: 1,
      tip: "Language barrier = qualified interpreter. Never kids, ideally not family." },

    { id: "e9", cat: "ethics",
      text: "A current client sends her social worker a friend request on the social worker's personal social media account.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept the request, but adjust the privacy settings to limit what the client can see.", "Any personal online connection with a client blurs boundaries."],
        ["Ignore the request and don't bring it up.", "Silence can feel like rejection. Talking about it helps the client understand the boundary."],
        ["Decline the request and talk about it with the client at the next session.", "Personal social media connections with clients create dual relationships. Explain the boundary kindly. Ideally the agency's social media policy is covered at intake."],
        ["End services, since the client crossed a professional boundary.", "This is a normal boundary to talk through, not a reason to terminate."]
      ],
      c: 2,
      tip: "Friend request from a client = decline and discuss. Boundaries get explained, not just enforced." },

    { id: "e10", cat: "ethics",
      text: "A client who recently lost his job says he can't afford his sessions anymore. He offers to paint the social worker's house instead of paying.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept, since it lets him keep getting the help he needs.", "Bartering services creates a dual relationship and room for conflict. What if the paint job goes badly?"],
        ["Accept, as long as the value of the work equals the fees.", "Matching the value doesn't remove the dual relationship."],
        ["Decline, and explore a sliding fee scale or low-cost options.", "The Code says to avoid taking goods or services as payment except in very limited situations. Help him keep services another way."],
        ["Decline, and pause services until he can pay again.", "Stopping abruptly abandons the client. Look for ways to continue."]
      ],
      c: 2,
      tip: "Bartering = generally no. Find another way to keep services going." },

    { id: "e11", cat: "ethics",
      text: "A social worker is leaving her agency in six weeks for a new job. She has an active caseload of 25 clients.",
      ask: "What is the BEST way to handle her caseload?",
      opts: [
        ["Wait until her last week to tell clients, so they aren't upset for too long.", "Clients need time to process the ending and get ready for a new worker."],
        ["Tell clients soon, talk through the ending, and explain their options.", "Clients deserve advance notice, a chance to talk about the ending, and a smooth handoff so their care continues."],
        ["Close all cases now so the next worker can start fresh.", "Closing cases early cuts clients off without proper termination."],
        ["Let her supervisor tell clients after she has left.", "Leaving without a goodbye can feel like abandonment and skips important termination work."]
      ],
      c: 1,
      tip: "Worker leaving = tell clients early, process feelings, transfer smoothly." },

    { id: "e12", cat: "ethics",
      text: "A social worker feels strong irritation toward a new client who reminds her of her abusive ex-partner. She finds herself dreading their sessions.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Transfer the client to another worker right away.", "A transfer may be needed later, but first understand and manage the reaction with help."],
        ["Tell the client about her feelings so the relationship stays honest.", "Sharing her personal reaction burdens the client and isn't for the client's benefit."],
        ["Seek supervision to explore and manage her reaction.", "This is countertransference. Supervision helps her stay objective so the client gets good care."],
        ["Push the feelings aside and stay professional in sessions.", "Ignored countertransference tends to leak into the work."]
      ],
      c: 2,
      tip: "Strong feelings about a client = supervision first." },

    { id: "e13", cat: "ethics",
      text: "An agency adopts a new policy: clients who miss two appointments are discharged automatically, with no outreach. A social worker believes this will hurt her most vulnerable clients.",
      ask: "What is the BEST action?",
      opts: [
        ["Quietly ignore the policy for her own clients.", "Secretly breaking policy isn't advocacy, and it treats clients unequally."],
        ["Follow the policy as written, since agency rules take priority over her views.", "Social workers are expected to work to change policies that harm clients."],
        ["Report the agency to the state licensing board.", "Licensing boards regulate individual practitioners, and this skips the internal channels."],
        ["Raise her concerns with administration and advocate for a change.", "The Code asks social workers to work to improve agency policies that conflict with clients' interests, through proper channels first."]
      ],
      c: 3,
      tip: "Harmful policy = advocate inside the system first." },

    { id: "e14", cat: "ethics",
      text: "During a home visit, a social worker notices finger-shaped bruises on a 6-year-old's upper arm. His mother says he fell off his bike.",
      ask: "What should the social worker do?",
      opts: [
        ["Ask the child detailed questions to find out what really happened.", "Investigating is child protective services' job. Detailed questioning can also upset the child and taint a later forensic interview."],
        ["Document the bruises and check on them at the next visit.", "Waiting leaves the child at risk. Reasonable suspicion means you report now."],
        ["Make a report to child protective services.", "Finger-shaped bruises don't fit a bike fall. Mandated reporters need reasonable suspicion, not proof."],
        ["Help the mother make a safety plan before deciding whether to report.", "Planning with the parent doesn't replace the legal duty to report, and it may alert an abuser."]
      ],
      c: 2,
      tip: "Reasonable suspicion = report. You don't have to be sure, and you don't investigate." },

    { id: "e15", cat: "ethics",
      text: "A longtime client has died. Her adult son calls the social worker and asks what his mother talked about in therapy. He says it would help him grieve.",
      ask: "What is the BEST response?",
      opts: [
        ["Share general themes, since it may help him heal.", "Even general themes are confidential information."],
        ["Share what he asks, since confidentiality ends when a client dies.", "It doesn't. The Code says to protect deceased clients' confidentiality too."],
        ["Express sympathy and explain that her confidentiality continues after death.", "Confidentiality survives death. Records can be released only as the law allows, such as to the estate's legal representative. You can still offer support or grief resources."],
        ["Suggest he request his mother's complete record from the agency's records office.", "Sending him for the record skips the legal requirements for release."]
      ],
      c: 2,
      tip: "Confidentiality doesn't end when the client dies." },

    { id: "e16", cat: "ethics",
      text: "Three years after services ended, a former client runs into his social worker at a coffee shop and asks her out on a date.",
      ask: "How should the social worker respond?",
      opts: [
        ["Accept, since more than two years have passed since termination.", "The two-year rule comes from other professions' codes. The NASW Code sets no waiting period."],
        ["Decline, because romantic relationships with former clients risk harm.", "The NASW Code says social workers should not have sexual relationships with former clients. Anyone claiming an exception carries the full burden of proving there was no exploitation."],
        ["Accept, as long as the former client is the one who asked.", "Who initiates doesn't change the social worker's responsibility."],
        ["Accept, but only after checking in with a supervisor.", "Supervision doesn't make it okay. This is a clear boundary, so decline."]
      ],
      c: 1,
      tip: "Former clients: no dating. Under the NASW Code, no amount of time makes it okay." },

    { id: "e17", cat: "ethics",
      text: "A client has been seeing a social worker by video. The client is moving to another state next month and wants to keep meeting online.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Continue as usual, since she's licensed in the state where she works.", "With telehealth, the rules of the state where the client is located generally apply."],
        ["Find out the licensing rules in the client's new state.", "Social workers must follow the laws of the jurisdiction where the client is. She may need a license there before continuing."],
        ["End services and refer the client to someone in the new state.", "That may end up being the plan, but first she should learn whether she can legally continue."],
        ["Switch to phone calls, since phone sessions don't need a license.", "Phone counseling is still practice and still needs the right license."]
      ],
      c: 1,
      tip: "Telehealth: ask where the client is sitting." },

    { id: "e18", cat: "ethics",
      text: "A client asks to read her case record. The social worker worries that some notes about the client's diagnosis may upset her.",
      ask: "What is the BEST response?",
      opts: [
        ["Refuse access, since the records belong to the agency.", "Clients have a right to reasonable access to their records."],
        ["Give her a summary instead of the actual record.", "Limiting access is only for exceptional cases with compelling evidence of serious harm. Worry about upset isn't enough."],
        ["Remove the upsetting notes before she reads the record.", "Altering records is never acceptable."],
        ["Provide access and offer to go over the record with her.", "The Code calls for reasonable access, plus help interpreting the record when it might be misunderstood or upsetting."]
      ],
      c: 3,
      tip: "Clients can see their records. You can help them understand what they read." },

    { id: "e19", cat: "ethics",
      text: "A court-ordered client tells the social worker she doesn't want to sign a release that would let attendance reports go to the court.",
      ask: "What should the social worker do?",
      opts: [
        ["Explain her right to refuse and the possible consequences of refusing.", "Involuntary clients still get informed consent: what services involve, where information goes, and what refusing could mean. For example, the court may see her as not complying."],
        ["Tell her she has no choice because the services are court-ordered.", "She can refuse. She just needs to understand the consequences."],
        ["Send the reports anyway, since the court ordered treatment.", "An order to attend treatment isn't consent to release information. Sending reports without a release breaks confidentiality."],
        ["End services, since she won't cooperate with the court order.", "Her refusal is something to talk through, not a reason to terminate."]
      ],
      c: 0,
      tip: "Mandated clients still get informed consent, including the right to refuse and what follows." },

    { id: "e20", cat: "ethics",
      text: "A social worker going through a painful divorce notices she has trouble concentrating in sessions. Last week she forgot an important detail a client had shared.",
      ask: "What should the social worker do?",
      opts: [
        ["Keep working as usual, since the stress is temporary and will pass on its own.", "Her difficulties are already affecting clients."],
        ["Tell her clients about the divorce so they understand.", "That self-disclosure meets her needs, not theirs."],
        ["Seek help, talk with her supervisor, and adjust her workload if needed.", "The Code asks social workers whose personal problems affect their work to get help and take steps, like lightening the workload, to protect clients."],
        ["Resign until the divorce is final.", "An extreme step. There are other ways to protect clients first."]
      ],
      c: 2,
      tip: "Your own stress affecting the work = get help and protect clients. Self-care is an ethical duty." },

    // ---------------- Assessment & Planning ----------------
    { id: "a1", cat: "assess",
      text: "A woman is referred by her doctor for help with “stress.” This is her first meeting with the social worker.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Give her a standardized anxiety screening tool.", "Tools can help later, after you've heard her story."],
        ["Ask her to describe, in her own words, what brought her in.", "Start where the client is. Her view of the problem guides the whole assessment."],
        ["Explain the treatment options the agency offers so she can choose one.", "You can't recommend services before you understand the problem."],
        ["Call her doctor to learn more about the referral.", "You'd need her consent first, and her own account comes first anyway."]
      ],
      c: 1,
      tip: "FIRST in a first session = engage and hear the client's view." },

    { id: "a2", cat: "assess",
      text: "During a session, a client says quietly, “Sometimes I think everyone would be better off without me.”",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Reassure him that his family and friends care about him and would miss him.", "Reassurance can shut the conversation down before you know the risk."],
        ["Ask him directly whether he's thinking about killing himself.", "This statement can signal suicidal thinking. Asking directly doesn't plant the idea. It opens the door to an honest risk assessment."],
        ["Arrange for him to be hospitalized right away.", "You don't know the level of risk yet. Assess first."],
        ["Explore what has been going well in his life lately.", "Strengths matter, but possible suicidal thinking must be assessed first."]
      ],
      c: 1,
      tip: "A hint of suicide = ask directly. Asking doesn't increase risk." },

    { id: "a3", cat: "assess",
      text: "A daughter brings in her 78-year-old mother, who has become confused and agitated over the past three days. The daughter says this is very unlike her.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Give a mental status exam to check for dementia.", "Dementia develops gradually. A sudden change points to a medical cause first."],
        ["Help the daughter look into memory care facilities.", "Far too early. There's no diagnosis yet."],
        ["Refer the mother for an immediate medical evaluation.", "Sudden confusion in an older adult may be delirium, from an infection, medication, or dehydration. It's urgent and often reversible."],
        ["Explore recent stressors that might explain the change.", "Stress doesn't usually cause sudden confusion. Rule out medical causes first."]
      ],
      c: 2,
      tip: "Sudden change, especially in an older adult = medical evaluation first." },

    { id: "a4", cat: "assess",
      text: "A social worker is using a strengths-based approach with a father who was recently laid off and is behind on rent.",
      ask: "Which question BEST reflects this approach?",
      opts: [
        ["“What do you think led to losing your job?”", "This looks for the problem's cause, not the client's strengths."],
        ["“How have you gotten through hard times before?”", "Strengths-based assessment looks for past coping, skills, and resources the client can build on."],
        ["“How many months behind on rent are you?”", "Useful facts, but it's problem-focused."],
        ["“Have you thought about a cheaper apartment?”", "This jumps to advice instead of finding strengths."]
      ],
      c: 1,
      tip: "Strengths perspective = look for what's already working." },

    { id: "a5", cat: "assess",
      text: "A new client mentions she was hospitalized for depression two years ago. The social worker thinks those records would help the assessment.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Call the hospital and request the records.", "Not without the client's written consent."],
        ["Explain why the records would help and ask her to sign a release.", "Collateral information is valuable, but you need the client's informed, written consent to get it."],
        ["Ask the client to describe everything that happened in the hospital.", "Pushing for every detail this early can feel intrusive, and her memory may differ from the records."],
        ["Note in the record that she has a history of major depression.", "Don't record a diagnosis you haven't verified."]
      ],
      c: 1,
      tip: "Collateral information = consent first." },

    { id: "a6", cat: "assess",
      text: "A social worker and a client who has panic attacks are writing treatment goals together.",
      ask: "Which goal is written in the MOST measurable way?",
      opts: [
        ["Client will understand the underlying causes of her anxiety by the end of treatment.", "“Understand” can't be observed or counted."],
        ["Client will feel calmer and more confident in social situations over the next few months.", "“Feel calmer” is vague, with no number or clear timeframe."],
        ["Client will reduce panic attacks from five per week to one per week within eight weeks.", "A specific behavior, a baseline, a target, and a deadline. You can measure it."],
        ["Client will work on her anxiety by attending counseling and completing homework.", "Attending sessions is an activity, not an outcome."]
      ],
      c: 2,
      tip: "Measurable = what, how much, by when." },

    { id: "a7", cat: "assess",
      text: "A client staying in a shelter is depressed and needs housing. She says finding an apartment is all she can think about. The social worker believes depression should be the main focus.",
      ask: "How should the social worker proceed?",
      opts: [
        ["Begin with housing, the client's priority, and address depression along the way.", "Start where the client is. Meeting basic needs builds trust, and housing stress feeds the depression."],
        ["Focus on the depression first, since treating it will make house hunting easier.", "This overrides the client's priorities and her basic needs."],
        ["Refer her to a housing agency and pause services until she's settled.", "She needs both. Don't drop her mental health support."],
        ["Explain to her why treating depression first is in her best interest.", "Talking the client into your priorities isn't collaboration."]
      ],
      c: 0,
      tip: "The client's priority and basic needs come first." },

    { id: "a8", cat: "assess",
      text: "A social worker is assessing a client from a cultural background the social worker knows little about.",
      ask: "What is the BEST approach?",
      opts: [
        ["Read about the client's culture and apply what she learns to the assessment.", "Learning is good, but general facts can turn into stereotypes. Individuals vary."],
        ["Treat the client the same as every other client to avoid bias.", "Ignoring culture overlooks what matters to the client."],
        ["Ask the client how his culture shapes the way he sees the problem.", "Cultural humility: the client is the expert on his own culture and experience."],
        ["Refer the client to a worker who shares his cultural background.", "Matching isn't required, and it can tell the client you can't serve him."]
      ],
      c: 2,
      tip: "Culture question? Ask the client. They're the expert." },

    { id: "a9", cat: "assess",
      text: "A social worker is completing an intake and needs to ask about alcohol use.",
      ask: "Which question is MOST likely to get accurate information?",
      opts: [
        ["“You don't drink much, do you?”", "A leading question that invites a “no.”"],
        ["“Do you have a problem with drinking?”", "Asking about a “problem” invites denial and can sound judgmental."],
        ["“How many drinks do you have in a typical week?”", "Matter-of-fact and specific. It assumes drinking may happen, which makes honest answers easier."],
        ["“Why do you think some people end up drinking too much?”", "Too abstract. It doesn't get at the client's own use."]
      ],
      c: 2,
      tip: "Ask about sensitive behavior plainly and specifically: how much, how often." },

    { id: "a10", cat: "assess",
      text: "A client says, “I know my drinking is causing problems with my wife, but I'm not sure I'm ready to give it up.”",
      ask: "Which stage of change is the client in?",
      opts: [
        ["Precontemplation", "Precontemplation means not seeing a problem. He clearly sees one."],
        ["Contemplation", "He sees the problem and feels torn about changing. Explore that ambivalence; motivational interviewing fits well here."],
        ["Preparation", "Preparation means planning to act soon, often with small steps already taken."],
        ["Action", "He hasn't started changing yet."]
      ],
      c: 1,
      tip: "“I know, but…” = contemplation." },

    { id: "a11", cat: "assess",
      text: "In a first couples session, the wife seems tense and glances at her husband before answering each question. The social worker suspects intimate partner violence.",
      ask: "What should the social worker do NEXT?",
      opts: [
        ["Ask the wife, in front of her husband, whether she feels safe at home.", "Asking in front of a possible abuser could put her in danger."],
        ["Meet with each partner separately to screen for violence.", "Screening for partner violence must happen privately. If abuse is present, couples counseling usually isn't appropriate."],
        ["Continue couples counseling with a focus on communication skills.", "Couples work can increase danger when there's ongoing abuse."],
        ["Report the husband to the police for suspected abuse.", "Nothing is confirmed, and adult partner violence usually isn't a mandated report. Assess first and respect the client's choices."]
      ],
      c: 1,
      tip: "Suspect partner violence = screen each partner alone." },

    { id: "a12", cat: "assess",
      text: "A client has thoughts of suicide but no plan or intent. The social worker and client are making a safety plan together.",
      ask: "What is MOST important to include in the plan?",
      opts: [
        ["A signed promise from the client that she won't harm herself before the next session.", "No-suicide contracts haven't been shown to prevent suicide and can give false reassurance."],
        ["Her warning signs, coping steps, and people and crisis lines to contact.", "Good safety plans are personal and concrete: warning signs, coping strategies, supports, crisis contacts like 988, and limiting access to means."],
        ["A schedule of weekly sessions for the next three months.", "Ongoing sessions help, but they aren't a safety plan."],
        ["A list of reasons the social worker believes life is worth living.", "Reasons for living should come from the client, not the social worker."]
      ],
      c: 1,
      tip: "Safety plan beats no-harm contract. Make it concrete and client-driven." },

    { id: "a13", cat: "assess",
      text: "A social worker in a primary care clinic wants a quick screening tool for problem drinking.",
      ask: "Which tool is BEST suited?",
      opts: [
        ["Mini-Mental State Exam (MMSE)", "Screens thinking and memory, not alcohol use."],
        ["CAGE questionnaire", "Four quick questions: Cut down, Annoyed, Guilty, Eye-opener. The AUDIT is another common choice."],
        ["PHQ-9", "Screens for depression."],
        ["Beck Anxiety Inventory", "Measures anxiety symptoms."]
      ],
      c: 1,
      tip: "CAGE = alcohol. PHQ-9 = depression. MMSE = thinking and memory." },

    { id: "a14", cat: "assess",
      text: "A social worker wants a visual picture of a family's ties to outside systems like school, work, church, and health care, and whether each tie is strong or stressful.",
      ask: "Which tool should the social worker use?",
      opts: [
        ["Genogram", "A genogram maps family members and relationships across generations."],
        ["Ecomap", "An ecomap shows the family in its environment and the strength or stress of each connection."],
        ["Sociogram", "A sociogram maps relationships among members of a group."],
        ["Timeline", "A timeline shows events over time."]
      ],
      c: 1,
      tip: "Genogram = generations. Ecomap = environment." },

    { id: "a15", cat: "assess",
      text: "A 16-year-old who was court-ordered to counseling sits with his arms crossed and says, “I don't need to be here.”",
      ask: "What is the BEST response?",
      opts: [
        ["“The judge says you do, so let's just make the best of it.”", "Leaning on authority invites more resistance."],
        ["“Sounds like this wasn't your idea. What's your side of it?”", "Acknowledging that he didn't choose this and asking for his view builds engagement."],
        ["“If you won't take part, I'll have to report that to the court.”", "Threats damage trust. Explain the limits of confidentiality without threatening."],
        ["“Most teens feel that way at first, but they end up liking it.”", "This brushes off his feelings."]
      ],
      c: 1,
      tip: "Mandated or resistant client = acknowledge it, roll with it, ask their view." },

    { id: "a16", cat: "assess",
      text: "A teacher refers an 8-year-old for being “hyperactive” in class. His parents say he's fine at home.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Recommend an evaluation for ADHD medication.", "Too early. No assessment has been done."],
        ["Start a reward chart with the teacher to improve his behavior in the classroom.", "Intervening before assessing skips a step."],
        ["Gather information from home, school, and the child's doctor.", "A full assessment uses several sources and settings and rules out medical issues like hearing, vision, or sleep problems. Different reports from home and school are useful information."],
        ["Tell the parents the teacher may be overreacting.", "Taking sides dismisses useful information."]
      ],
      c: 2,
      tip: "Assess before you intervene, and use more than one source." },

    { id: "a17", cat: "assess",
      text: "During an intake, a client becomes visibly upset when asked about her childhood and says, “I really don't want to talk about that.”",
      ask: "What is the BEST response?",
      opts: [
        ["Gently explain that the full history is needed to help her.", "Pressuring a trauma survivor to disclose can retraumatize her."],
        ["Respect her choice and let her know she can share when she's ready.", "Trauma-informed care puts safety, choice, and control first. The history can come later, at her pace."],
        ["Switch to a written trauma checklist so it's easier for her.", "A checklist still pushes the topic she just declined."],
        ["End the intake and reschedule for when she feels calmer.", "Ending early can feel like a punishment for setting a limit."]
      ],
      c: 1,
      tip: "Trauma-informed = safety, choice, control. Let the client set the pace." },

    { id: "a18", cat: "assess",
      text: "After three months, a client has made no progress on the goals she and the social worker set together.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Refer her to a provider who uses a different approach.", "Maybe later. First figure out what's going on."],
        ["Increase sessions from weekly to twice a week.", "More of the same won't help if the plan is off."],
        ["Talk with the client about her progress and what's getting in the way.", "Review the plan together. Goals may need adjusting or barriers may need addressing. Evaluation is ongoing and shared."],
        ["Bring up ending services, since the treatment clearly isn't working for her.", "Ending is premature before you reassess."]
      ],
      c: 2,
      tip: "Stuck? Reassess with the client before changing course." },

    { id: "a19", cat: "assess",
      text: "A social worker is assessing a client's risk of suicide.",
      ask: "Which factor is the STRONGEST single predictor of suicide?",
      opts: [
        ["A previous suicide attempt", "A past attempt is the strongest single predictor of future suicidal behavior."],
        ["A diagnosis of depression", "A major risk factor, but a past attempt predicts risk even more strongly."],
        ["A recent job loss", "A real stressor and risk factor, but not the strongest predictor."],
        ["Living alone", "Isolation adds risk, but it isn't the strongest predictor."]
      ],
      c: 0,
      tip: "Strongest single predictor of suicide = a previous attempt." },

    { id: "a20", cat: "assess",
      text: "After a thorough assessment, an adult client has frequent panic attacks with no medical cause. She wants a treatment with strong research support.",
      ask: "Which approach should the social worker recommend?",
      opts: [
        ["Cognitive behavioral therapy with exposure", "CBT, including gradual exposure to feared sensations, has the strongest research support for panic disorder."],
        ["Long-term psychodynamic therapy focused on early conflicts", "Less research support for panic disorder than CBT."],
        ["Narrative therapy", "Not an evidence-based first choice for panic disorder."],
        ["Nondirective play therapy", "Designed for young children, not adult panic."]
      ],
      c: 0,
      tip: "Choose the intervention that fits both the assessment and the evidence." },

    // ---------------- Intervention & Practice ----------------
    { id: "i1", cat: "interv",
      text: "A woman arrives at the agency in tears. Her apartment burned down last night, and she and her two children slept in their car.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Help her explore her feelings about losing her home and all her belongings.", "Feelings matter, but in a crisis, safety and basic needs come first."],
        ["Assess the family's immediate safety and needs, like shelter tonight.", "Crisis intervention starts with safety and urgent needs: shelter, food, medical care."],
        ["Help her call her insurance company to start a claim.", "Important, but not the most urgent need."],
        ["Refer her to a support group for disaster survivors.", "Longer-term support comes after immediate needs are met."]
      ],
      c: 1,
      tip: "Crisis = safety and basic needs first." },

    { id: "i2", cat: "interv",
      text: "A client says, “My doctor keeps telling me to quit smoking, but it's the only thing that helps me relax.”",
      ask: "Which response BEST reflects motivational interviewing?",
      opts: [
        ["“You really should listen to your doctor, since smoking is seriously harming your health.”", "That's the “righting reflex.” Pushing usually strengthens resistance."],
        ["“Have you tried nicotine patches or gum?”", "This jumps to solutions before exploring the client's mixed feelings."],
        ["“Smoking helps you relax, and you're also hearing worries about your health.”", "A double-sided reflection captures both sides of the ambivalence so the client can weigh them."],
        ["“Why haven't you been able to quit so far?”", "“Why” questions can sound judgmental and make people defensive."]
      ],
      c: 2,
      tip: "Motivational interviewing = reflect both sides, don't push." },

    { id: "i3", cat: "interv",
      text: "A social worker asks a couple, “Think of a day this week when you didn't argue. What was different that day?”",
      ask: "This is an example of which technique?",
      opts: [
        ["Reframing", "Reframing gives a behavior a new meaning, as in strategic family therapy."],
        ["An exception question", "Solution-focused therapy looks for times the problem didn't happen and builds on them."],
        ["Cognitive restructuring", "A CBT technique for challenging distorted thoughts."],
        ["Externalizing the problem", "A narrative therapy technique that separates the person from the problem."]
      ],
      c: 1,
      tip: "Solution-focused = exception questions, scaling questions, the miracle question." },

    { id: "i4", cat: "interv",
      text: "A client with depression says, “I'm a complete failure. I can't do anything right.”",
      ask: "Using cognitive behavioral therapy, what would the social worker MOST likely do?",
      opts: [
        ["Explore the early childhood experiences that may have shaped this belief.", "That's a psychodynamic focus."],
        ["Reassure the client that she isn't a failure.", "Reassurance doesn't teach her to examine her own thoughts."],
        ["Teach progressive muscle relaxation for stress.", "Useful for anxiety, but it doesn't address the thought."],
        ["Help the client examine the evidence for and against this belief.", "Cognitive restructuring: spot the distortion (all-or-nothing thinking) and test it against the evidence."]
      ],
      c: 3,
      tip: "CBT: thoughts drive feelings and behavior. Challenge the thought." },

    { id: "i5", cat: "interv",
      text: "In the third meeting of a new support group, members start challenging the leader and arguing over the group's rules.",
      ask: "What should the group leader do?",
      opts: [
        ["Restate the group rules firmly and move the discussion back to the topic.", "Shutting down conflict keeps the group from working through it."],
        ["Acknowledge the conflict as normal and help members talk it through.", "This is the storming stage, also called power and control. Working through conflict helps the group build norms and trust."],
        ["Ask the most outspoken member to leave the group.", "Removing someone over normal group conflict is punitive."],
        ["Split the group into smaller groups to lower the tension.", "This avoids the conflict instead of using it."]
      ],
      c: 1,
      tip: "Forming, storming, norming, performing, adjourning. Conflict while storming is normal." },

    { id: "i6", cat: "interv",
      text: "As termination gets closer, a client who has made good progress starts missing sessions. She says her old symptoms are “coming back.”",
      ask: "What should the social worker do?",
      opts: [
        ["Extend services until the symptoms go away.", "This can build dependence. Explore first."],
        ["Explore the client's feelings about ending services.", "Setbacks and missed sessions are common reactions to termination. Talking about the ending is part of the work."],
        ["Refer the client for a medication evaluation.", "The timing points to feelings about ending, not a new medical need."],
        ["Go ahead with termination as planned without discussing it.", "Ignoring her reaction skips important termination work."]
      ],
      c: 1,
      tip: "Old symptoms right before the end? Explore feelings about ending." },

    { id: "i7", cat: "interv",
      text: "In family therapy, the social worker notices that a mother and her 14-year-old son make the family's decisions together while the father is left out.",
      ask: "Using structural family therapy, what would the social worker MOST likely do?",
      opts: [
        ["Explore each parent's family of origin.", "That's closer to Bowen's intergenerational approach."],
        ["Strengthen the boundary around the parents as a team.", "Structural therapy (Minuchin) reshapes boundaries and hierarchy. Here that means strengthening the parental subsystem and loosening the mother-son coalition."],
        ["Give the family a paradoxical task to do at home.", "Paradoxical directives come from strategic therapy."],
        ["Help the son rewrite the story of his role in the family.", "That's narrative therapy."]
      ],
      c: 1,
      tip: "Structural = boundaries, subsystems, hierarchy (Minuchin)." },

    { id: "i8", cat: "interv",
      text: "A client who injects heroin says he isn't ready to stop using.",
      ask: "Which response reflects a harm reduction approach?",
      opts: [
        ["Require abstinence before he can receive other services.", "That's the opposite of harm reduction."],
        ["Tell him services will be available once he's ready to quit.", "Harm reduction meets people where they are now."],
        ["Give him information on syringe services and naloxone.", "Harm reduction lowers the risks of use, like overdose and infection, without requiring abstinence."],
        ["Confront his denial about how serious his addiction is.", "Confrontation tends to increase resistance."]
      ],
      c: 2,
      tip: "Harm reduction = lower the risk now. Abstinence isn't required." },

    { id: "i9", cat: "interv",
      text: "A client's disability benefits were denied. She brings the denial letter to her social worker and says she doesn't understand it.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Call the benefits office and file the appeal on her behalf so it's done quickly.", "Doing it for her skips her understanding and her choice."],
        ["Refer her to a legal aid attorney to handle the appeal.", "Maybe later. First help her understand what the letter says."],
        ["Go over the letter together and explain her options, including an appeal.", "Empowerment: help the client understand and decide, then support or advocate as needed."],
        ["Encourage her to reapply in six months.", "She could miss her appeal deadline."]
      ],
      c: 2,
      tip: "Empower first: help the client understand and choose." },

    { id: "i10", cat: "interv",
      text: "The parents of a 19-year-old recently diagnosed with schizophrenia blame themselves and ask what they did wrong.",
      ask: "What is the MOST helpful intervention?",
      opts: [
        ["Explore the parenting decisions they think may have caused it.", "This can deepen guilt that isn't deserved."],
        ["Teach them about schizophrenia, including that parenting doesn't cause it.", "Family psychoeducation eases guilt and stress and is linked to fewer relapses."],
        ["Refer each parent to individual therapy to work through their guilt and grief.", "It could help later, but right now they need accurate information."],
        ["Suggest they save their questions for the psychiatrist's next visit.", "Social workers can and should provide psychoeducation."]
      ],
      c: 1,
      tip: "Families facing serious mental illness = psychoeducation." },

    { id: "i11", cat: "interv",
      text: "A client arrives for her session slurring her words and smelling strongly of alcohol. She drove herself to the appointment.",
      ask: "What should the social worker do?",
      opts: [
        ["Hold the session as planned, and use it to confront her about her drinking.", "Real work can't happen while she's intoxicated."],
        ["Reschedule, and make sure she gets home safely without driving.", "Don't hold a session with an intoxicated client, but do handle the immediate risk of her driving."],
        ["Call the police to report that she is driving drunk.", "Arrange a safe ride first. Police come in only if she insists on driving while impaired."],
        ["End services, since she broke the agency's rules.", "Punitive, and it abandons her when she needs help."]
      ],
      c: 1,
      tip: "Intoxicated client: no session, yes safety." },

    { id: "i12", cat: "interv",
      text: "A father nags his son until the son cleans his room. When the son cleans, the nagging stops. Over time, the son cleans his room more often.",
      ask: "What is this an example of?",
      opts: [
        ["Positive reinforcement", "Positive reinforcement adds something pleasant."],
        ["Negative reinforcement", "Taking away something unpleasant (the nagging) increases a behavior (cleaning). Reinforcement always increases behavior."],
        ["Punishment", "Punishment decreases a behavior. Here the behavior increases."],
        ["Extinction", "Extinction removes reinforcement so a behavior fades."]
      ],
      c: 1,
      tip: "Reinforcement increases behavior, punishment decreases it. Positive adds, negative removes." },

    { id: "i13", cat: "interv",
      text: "A social worker wants to find out whether a new intervention reduces a child's tantrums at home.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Start the intervention and ask the parents how it's going.", "Without a baseline, you can't tell whether anything changed."],
        ["Measure how often tantrums happen before the intervention starts.", "Single-subject (A-B) designs start with a baseline (A), then measure during the intervention (B)."],
        ["Compare the child with other children in the same program.", "That's a group design, not tracking this child's change."],
        ["Ask the child's teacher whether she has noticed improvement.", "The tantrums happen at home, and you still need a baseline first."]
      ],
      c: 1,
      tip: "Evaluating practice: baseline first (A), then intervention (B)." },

    { id: "i14", cat: "interv",
      text: "A client has a long pattern of intense emotional swings, unstable relationships, and frequent self-harm.",
      ask: "Which intervention has the STRONGEST research support for these concerns?",
      opts: [
        ["Dialectical behavior therapy (DBT)", "DBT was built for chronic self-harm and emotional dysregulation. It teaches mindfulness, distress tolerance, emotion regulation, and interpersonal skills."],
        ["Solution-focused brief therapy", "Helpful for many issues, but not the evidence-based choice here."],
        ["Classical psychoanalysis", "Not a first-line, evidence-based approach for chronic self-harm."],
        ["Task-centered practice", "Good for concrete problems, not emotional dysregulation."]
      ],
      c: 0,
      tip: "Self-harm plus emotional dysregulation = DBT." },

    { id: "i15", cat: "interv",
      text: "After talking about her father's recent death, a client goes quiet and looks down for several moments.",
      ask: "What is the BEST response?",
      opts: [
        ["Allow the silence and give her time.", "Silence often means the client is processing. Waiting respectfully gives her space."],
        ["Change the subject to something less upsetting.", "Moving on tells her these feelings are too much to talk about."],
        ["Ask whether she has made the funeral arrangements.", "A practical question that interrupts her emotional processing."],
        ["Reassure her that the pain will fade with time.", "Reassurance can minimize her grief."]
      ],
      c: 0,
      tip: "Silence isn't a problem to fix. Often it's part of the work." },

    { id: "i16", cat: "interv",
      text: "Three weeks after her husband died, a widow tells the social worker she sometimes hears his voice calling her name. She has no history of mental illness.",
      ask: "What should the social worker do?",
      opts: [
        ["Refer her for an urgent psychiatric evaluation to rule out a psychotic disorder.", "Briefly hearing or sensing a loved one who died is common in normal grief."],
        ["Explain that this is a common grief experience and explore her feelings.", "Normalizing it eases her fear while you keep assessing how she's coping."],
        ["Tell her it will stop soon and focus on practical matters.", "This brushes her experience aside."],
        ["Encourage her to stay busy so she thinks about him less.", "Avoidance can complicate grieving."]
      ],
      c: 1,
      tip: "Hearing or sensing a loved one after a death is often normal grief, not psychosis." },

    { id: "i17", cat: "interv",
      text: "A client says, “You're too young to understand what I'm going through.”",
      ask: "What is the BEST response?",
      opts: [
        ["“I have a master's degree and years of experience.”", "Defending yourself puts the focus on the worker."],
        ["“Age really doesn't matter in this kind of work.”", "This dismisses the client's concern."],
        ["“You're wondering whether I can really understand you.”", "Reflecting the concern invites the client to talk about it openly and builds trust."],
        ["“Would you rather work with an older social worker?”", "Premature. Explore the concern first."]
      ],
      c: 2,
      tip: "Client challenges you? Don't defend. Reflect and explore." },

    { id: "i18", cat: "interv",
      text: "A client says she stopped taking her antidepressant two weeks ago because of side effects. She hasn't told her doctor.",
      ask: "What should the social worker do?",
      opts: [
        ["Encourage her to talk with her prescriber about the side effects.", "Medication decisions belong with the prescriber. The social worker supports the client in speaking up, and can coordinate care with her consent."],
        ["Tell her to restart the medication right away.", "Social workers don't give medication instructions."],
        ["Support her decision, since it's her right to refuse medication.", "It is her right, but stopping some medications suddenly can be risky. Her prescriber should know."],
        ["Call her doctor to report that she stopped the medication.", "Not without her consent. First encourage her to tell the doctor herself."]
      ],
      c: 0,
      tip: "Medication questions go to the prescriber. Support, don't prescribe." },

    { id: "i19", cat: "interv",
      text: "A neighborhood has no grocery store. A social worker helps residents come together, choose their own leaders and goals, and build skills to tackle the problem themselves.",
      ask: "Which model of community practice is this?",
      opts: [
        ["Social planning", "Expert-driven, data-based problem solving."],
        ["Social action", "Confronting power structures to shift power or resources."],
        ["Locality development", "Broad participation, self-help, and building local leadership and capacity (Rothman)."],
        ["Program evaluation", "Judging whether a program works."]
      ],
      c: 2,
      tip: "Rothman: locality development = self-help, social planning = experts, social action = power." },

    { id: "i20", cat: "interv",
      text: "A client says, “My boss yelled at me in front of the whole team today.”",
      ask: "Which response is a reflection of feeling?",
      opts: [
        ["“What did you say back to him?”", "A question about events, not feelings."],
        ["“That sounds humiliating, and maybe infuriating too.”", "Reflection of feeling names the emotion under the words."],
        ["“Your boss criticized you in front of your coworkers.”", "That's a paraphrase of the content, not the feeling."],
        ["“Maybe you should talk to HR about it.”", "That's advice."]
      ],
      c: 1,
      tip: "Paraphrase = content. Reflection of feeling = emotion." },

    // ---------------- Human Development & Diversity ----------------
    { id: "h1", cat: "human",
      text: "A 15-year-old keeps changing her style, friend groups, and career plans every few months. Her parents worry that something is wrong.",
      ask: "According to Erikson, which stage BEST explains this behavior?",
      opts: [
        ["Identity vs. role confusion", "Teens try on roles, values, and looks as they work out who they are. Some trying-on is healthy and expected."],
        ["Intimacy vs. isolation", "That's young adulthood: forming close, committed relationships."],
        ["Industry vs. inferiority", "That's school age, about 6 to 12: building skills and competence."],
        ["Autonomy vs. shame and doubt", "That's toddlerhood: learning to do things for oneself."]
      ],
      c: 0,
      tip: "Erikson in the teen years = identity vs. role confusion. Experimenting is normal." },

    { id: "h2", cat: "human",
      text: "A 79-year-old man in hospice spends much of his time looking back on his life. He says he's mostly at peace, though he regrets losing touch with his brother.",
      ask: "Which of Erikson's stages is he working through?",
      opts: [
        ["Generativity vs. stagnation", "That's middle adulthood: contributing to the next generation."],
        ["Integrity vs. despair", "Late adulthood: looking back and finding meaning (integrity) or regret (despair). A life review fits here."],
        ["Intimacy vs. isolation", "That's young adulthood."],
        ["Trust vs. mistrust", "That's infancy."]
      ],
      c: 1,
      tip: "Life review in old age = integrity vs. despair." },

    { id: "h3", cat: "human",
      text: "A mother says her 10-month-old now cries and searches when she hides his toy under a blanket. A few months ago, he lost interest as soon as it was out of sight.",
      ask: "Which developmental milestone does this show?",
      opts: [
        ["Object permanence", "In Piaget's sensorimotor stage, babies learn that things still exist when they can't see them, usually from around 8 months."],
        ["Conservation", "Conservation (amount stays the same when shape changes) comes in the concrete operational stage, around ages 7 to 11."],
        ["Egocentrism", "Egocentrism is a preschooler's difficulty seeing another person's point of view."],
        ["Separation anxiety", "Separation anxiety also shows up around this age, but it's about the caregiver leaving, not hidden toys."]
      ],
      c: 0,
      tip: "Piaget: sensorimotor (object permanence), preoperational (egocentrism), concrete operational (conservation), formal operational (abstract thinking)." },

    { id: "h4", cat: "human",
      text: "A 5-year-old insists that a tall, thin glass holds more juice than a short, wide glass, even after watching the same amount poured into each.",
      ask: "In Piaget's terms, what has this child NOT yet developed?",
      opts: [
        ["Object permanence", "That develops in infancy. This child already has it."],
        ["Conservation", "Knowing that quantity stays the same when shape changes arrives in the concrete operational stage, around age 7. A 5-year-old is still preoperational."],
        ["Abstract reasoning", "That's formal operational thinking in adolescence, and it isn't what this task tests."],
        ["Theory of mind", "Understanding other people's beliefs is usually in place by age 4 or 5, and it isn't what this task tests."]
      ],
      c: 1,
      tip: "Tall glass vs. wide glass = conservation (concrete operational, about age 7)." },

    { id: "h5", cat: "human",
      text: "In a structured observation, a toddler barely reacts when his mother leaves the room. When she comes back, he ignores her and keeps playing with his toys.",
      ask: "This pattern BEST fits which attachment style?",
      opts: [
        ["Secure", "A securely attached child is usually upset when the parent leaves and is comforted when the parent returns."],
        ["Anxious-ambivalent", "These children are very upset at separation and both seek and resist comfort at the reunion."],
        ["Avoidant", "Little distress at separation and avoiding the parent at reunion is the classic avoidant pattern in Ainsworth's Strange Situation."],
        ["Disorganized", "Disorganized attachment shows confused or contradictory behavior, like freezing, and is often linked to frightening caregiving."]
      ],
      c: 2,
      tip: "Attachment: secure, avoidant, anxious-ambivalent, disorganized. Avoidant = “I don't need you” at the reunion." },

    { id: "h6", cat: "human",
      text: "After being criticized by his boss, a man comes home and yells at his kids for leaving their shoes by the door.",
      ask: "Which defense mechanism is he using?",
      opts: [
        ["Projection", "Projection puts your own unacceptable feelings onto someone else, like accusing others of being angry."],
        ["Displacement", "He moves his anger from a risky target (his boss) to a safer one (his kids)."],
        ["Sublimation", "Sublimation channels an urge into something healthy, like going for a hard run."],
        ["Reaction formation", "Reaction formation is acting the opposite of what you feel, like being extra sweet to someone you resent."]
      ],
      c: 1,
      tip: "Displacement = kicking the dog. Projection = “You're the angry one!”" },

    { id: "h7", cat: "human",
      text: "A woman who deeply resents her mother-in-law goes out of her way to be extremely sweet and complimentary to her, far more than to anyone else.",
      ask: "Which defense mechanism BEST describes this?",
      opts: [
        ["Rationalization", "Rationalization is making up acceptable reasons for behavior, like “I failed because the test was unfair.”"],
        ["Reaction formation", "She turns an unacceptable feeling (resentment) into its exaggerated opposite (sweetness)."],
        ["Denial", "Denial is refusing to accept a reality, like insisting a serious diagnosis is wrong."],
        ["Intellectualization", "Intellectualization is retreating into facts and logic to avoid feelings."]
      ],
      c: 1,
      tip: "Reaction formation = the over-the-top opposite of what you really feel." },

    { id: "h8", cat: "human",
      text: "A man recently diagnosed with terminal cancer tells the social worker, “If I can just live to see my daughter graduate in June, I'll accept whatever comes after.”",
      ask: "Which stage of grief is he MOST likely in?",
      opts: [
        ["Denial", "He isn't rejecting the diagnosis. He's acknowledging it."],
        ["Anger", "There's no blame or rage in what he says."],
        ["Bargaining", "“If I can just…” is a classic bargain: trying to negotiate for more time or a different outcome."],
        ["Acceptance", "He isn't at peace with it yet. He's trying to make a deal first."]
      ],
      c: 2,
      tip: "Kübler-Ross: denial, anger, bargaining, depression, acceptance. People don't always move through them in order." },

    { id: "h9", cat: "human",
      text: "A father was evicted yesterday and is sleeping in his car with his two children. He tells the social worker he feels like a complete failure.",
      ask: "Using Maslow's hierarchy, what should the social worker focus on FIRST?",
      opts: [
        ["His feelings of failure and low self-esteem", "Esteem matters, but Maslow puts it above basic survival and safety needs."],
        ["Finding safe shelter for the family tonight", "Physiological and safety needs, like shelter, come first in Maslow's hierarchy."],
        ["His long-term career and education goals", "Growth goals rest on a stable base. Shelter comes first."],
        ["Rebuilding his support network", "Belonging comes after physiological and safety needs."]
      ],
      c: 1,
      tip: "Maslow: body, safety, belonging, esteem, self-actualization. Shelter first." },

    { id: "h10", cat: "human",
      text: "A 9-year-old says it's wrong to cheat on a test “because you'll get in trouble if the teacher catches you.”",
      ask: "Which level of Kohlberg's moral development does this reflect?",
      opts: [
        ["Preconventional", "Right and wrong are judged by punishment and reward, which is typical of young children."],
        ["Conventional", "Conventional reasoning is about following rules and meeting others' expectations to be seen as good."],
        ["Postconventional", "Postconventional reasoning rests on personal principles and universal ethics, beyond rules."],
        ["Formal operational", "That's Piaget's stage of abstract thinking, not a Kohlberg level."]
      ],
      c: 0,
      tip: "Kohlberg: preconventional (avoid punishment), conventional (follow rules, be good), postconventional (principles)." },

    { id: "h11", cat: "human",
      text: "After the father in a family stops drinking, the family seems to struggle more. Without realizing it, the mother and kids act in ways that make a relapse more likely.",
      ask: "Which systems theory concept BEST explains this?",
      opts: [
        ["Equifinality", "Equifinality means different starting points can lead to the same outcome."],
        ["Homeostasis", "Systems tend to pull back toward their familiar balance, even an unhealthy one, when one part changes."],
        ["Differentiation", "Differentiation (Bowen) is about separating your own thoughts and feelings from the family's."],
        ["Entropy", "Entropy is a closed system's slide toward disorder and decline."]
      ],
      c: 1,
      tip: "Homeostasis: families pull back toward the old balance, even when it hurts." },

    { id: "h12", cat: "human",
      text: "A child's anxiety rises after her mother's employer moves the mother to night shifts. The child has never been to her mother's workplace.",
      ask: "In Bronfenbrenner's ecological model, which of the child's systems includes her mother's workplace?",
      opts: [
        ["Microsystem", "The microsystem is the settings the child is directly in, like home and school."],
        ["Mesosystem", "The mesosystem is the links between the child's settings, like parents and teachers talking."],
        ["Exosystem", "The exosystem is settings the child isn't part of that still affect her, like a parent's job."],
        ["Macrosystem", "The macrosystem is the broad culture, values, laws, and economy."]
      ],
      c: 2,
      tip: "Bronfenbrenner: micro (direct), meso (links), exo (affects you from outside), macro (culture), chrono (time)." },

    { id: "h13", cat: "human",
      text: "An immigrant family keeps their native language and traditions at home while also taking an active part in their new country's schools, work, and community life.",
      ask: "Which acculturation strategy does this describe?",
      opts: [
        ["Assimilation", "Assimilation means giving up the original culture to adopt the new one."],
        ["Integration", "Integration, sometimes called biculturalism, keeps the heritage culture while taking part in the new one. It's generally linked to the best adjustment."],
        ["Separation", "Separation keeps the original culture while avoiding the new one."],
        ["Marginalization", "Marginalization is losing connection with both cultures."]
      ],
      c: 1,
      tip: "Berry: integration (both), assimilation (new only), separation (old only), marginalization (neither)." },

    { id: "h14", cat: "human",
      text: "A Korean American client born in Ohio tells her social worker that coworkers often compliment her “excellent English” and ask where she's “really” from.",
      ask: "What BEST describes these comments?",
      opts: [
        ["Microaggressions", "Everyday comments, often unintended, that signal someone doesn't belong. Here, a U.S.-born woman is treated as a foreigner."],
        ["Institutional racism", "Institutional racism lives in policies and systems, not individual comments."],
        ["Cultural appropriation", "That's adopting parts of another culture, often without respect or credit."],
        ["Acculturative stress", "That's stress from adapting to a new culture. She was born here."]
      ],
      c: 0,
      tip: "Microaggressions: small, often unintended slights that add up. Validate the client's experience." },

    { id: "h15", cat: "human",
      text: "A social worker realizes that a client's experiences as a Black, disabled woman can't be understood by looking at race, disability, or gender one at a time.",
      ask: "Which concept does this reflect?",
      opts: [
        ["Intersectionality", "Kimberlé Crenshaw's term for how overlapping identities create unique experiences of privilege and oppression."],
        ["Cultural relativism", "Cultural relativism means judging a culture's practices by its own standards."],
        ["Assimilation", "Assimilation is adopting the dominant culture's ways."],
        ["Color-blindness", "Ignoring race erases important parts of the client's experience."]
      ],
      c: 0,
      tip: "Intersectionality: identities overlap and combine. They don't just add up." },

    { id: "h16", cat: "human",
      text: "A 17-year-old client who was assigned female at birth tells the social worker he is a boy and that he's attracted to boys. He asks whether that means he's gay or transgender.",
      ask: "What is the MOST accurate response?",
      opts: [
        ["“Those are two separate things. You can be transgender and gay.”", "Gender identity is who you are. Sexual orientation is who you're attracted to. They're independent of each other."],
        ["“Being attracted to boys might mean you're confused about your gender.”", "Orientation doesn't determine gender identity, and this treats his identity as confusion."],
        ["“Lots of teens go through phases like this and outgrow them.”", "Dismissing a teen's stated identity harms trust and well-being. Affirm and explore."],
        ["“You won't know your orientation until after you transition.”", "Orientation and transition are unrelated, and he has already said who he's attracted to."]
      ],
      c: 0,
      tip: "Gender identity = who you are. Sexual orientation = who you're attracted to. Separate things." },

    { id: "h17", cat: "human",
      text: "A 72-year-old woman says she sometimes forgets a name and remembers it later, or walks into a room and forgets why. She handles her money, cooking, and appointments without trouble.",
      ask: "How is this BEST understood?",
      opts: [
        ["Early signs of Alzheimer's disease", "Dementia affects daily functioning, and she's managing everything on her own."],
        ["Typical age-related changes in memory", "Occasional lapses that come back to her, with daily life intact, are part of normal aging."],
        ["Delirium needing emergency care", "Delirium is sudden confusion and inattention, not occasional forgetfulness."],
        ["Memory problems caused by depression", "Depression can affect memory, but nothing here suggests low mood."]
      ],
      c: 1,
      tip: "Normal aging: forgets, then remembers, and life still works. Dementia: daily life starts to slip." },

    { id: "h18", cat: "human",
      text: "A social worker is reading research on adverse childhood experiences (ACEs), such as abuse, neglect, and household dysfunction.",
      ask: "What does the research MOST consistently show?",
      opts: [
        ["Most children who face adversity show no lasting effects once they reach adulthood.", "Many children are resilient, but on average ACEs raise the risk of later problems."],
        ["The more ACEs a person has, the higher their risk of adult health problems.", "The original CDC-Kaiser study found a dose-response link: more ACEs, higher risk of conditions like heart disease, depression, and substance use."],
        ["ACEs affect mental health but not physical health.", "ACEs are linked to physical conditions too, like heart disease and diabetes."],
        ["Only physical abuse has a measurable long-term impact.", "Neglect, household dysfunction, and other ACEs raise risk too."]
      ],
      c: 1,
      tip: "ACEs work like a dose: more adversity, more lifelong risk. Supportive relationships can buffer it." },

    { id: "h19", cat: "human",
      text: "A 6-year-old starts hitting his little sister after watching his older cousin hit other kids and get his way.",
      ask: "Which theory BEST explains how this behavior was learned?",
      opts: [
        ["Social learning theory", "Bandura: people learn by watching others, especially when they see the behavior rewarded."],
        ["Classical conditioning", "Classical conditioning pairs a neutral stimulus with an automatic response, like Pavlov's dogs."],
        ["Psychosexual theory", "Freud's stages focus on drives and early conflicts, not learning by watching."],
        ["Cognitive dissonance theory", "That's the discomfort of holding conflicting beliefs or acting against them."]
      ],
      c: 0,
      tip: "Learning by watching, and seeing it pay off = Bandura's social learning theory." },

    { id: "h20", cat: "human",
      text: "Parents of a 2-year-old are worried because she says “No!” to almost everything and has tantrums when she can't do things by herself.",
      ask: "What is the BEST way to understand this behavior?",
      opts: [
        ["A normal push for independence at this age", "Erikson's autonomy vs. shame and doubt: toddlers assert themselves, so “No!” and tantrums are expected."],
        ["Early oppositional defiant disorder", "Saying no is normal at 2. A diagnosis needs a lasting pattern beyond what's typical for the child's age."],
        ["A reaction to inconsistent parenting", "Nothing here points to a parenting problem."],
        ["A sign of insecure attachment", "Asserting independence doesn't signal insecure attachment. Secure toddlers explore and push back."]
      ],
      c: 0,
      tip: "Toddler “No!” = autonomy vs. shame and doubt. Normal development, not a disorder." },

    // ---------------- 2026 blueprint batch ----------------
    { id: "e21", cat: "ethics",
      text: "During intake, a middle-aged client quietly tells the social worker that he doesn't read well. He asks where to sign the consent forms.",
      ask: "What should the social worker do?",
      opts: [
        ["Show him where to sign and give him copies of the forms to take home.", "A signature without understanding is not informed consent."],
        ["Ask his wife, who is in the waiting room, to read the forms to him later.", "This shares his private struggle without asking him, and consent would still come after the fact."],
        ["Explain the forms aloud in plain language and check that he understands.", "Consent must be in language the client can follow. Explain it clearly and check his understanding before he signs."],
        ["Postpone services until he can bring someone along to help him read.", "Reading ability is no reason to delay help. The social worker can explain the forms herself."]
      ],
      c: 2,
      tip: "Informed consent = understood, not just signed." },

    { id: "e22", cat: "ethics",
      text: "A social worker wants to video record her sessions with a client so she can review them with her clinical supervisor.",
      ask: "What must she do FIRST?",
      opts: [
        ["Get the client's informed consent before recording.", "Clients must agree before any audio or video recording, and know who will see it and why."],
        ["Record, then tell the client afterward how the video was used.", "Telling the client after the fact is not consent. Permission comes first."],
        ["Get agency approval, since the video stays inside the agency.", "Agency rules may also apply, but they never replace the client's own consent."]
      ],
      c: 0,
      tip: "Recording or third-party observation? Client consent first." },

    { id: "e23", cat: "ethics",
      text: "A man is court-ordered to attend anger management sessions. At intake he asks the social worker, “Do I even have a choice here?”",
      ask: "What is the BEST response?",
      opts: [
        ["Tell him he has no choice, since a judge has ordered him to attend.", "Involuntary clients still have a right to refuse. They need to know what refusing would mean."],
        ["Explain that court-ordered clients don't sign consent forms for services.", "Mandated clients still get informed consent, adapted to their situation."],
        ["Promise that what he says stays private and the court only hears about attendance.", "The social worker can't promise this. What goes to the court depends on the order and any releases."],
        ["Explain what will be reported to the court and his right to refuse, with its consequences.", "Mandated clients should know what will be shared, with whom, and the likely results of saying no."]
      ],
      c: 3,
      tip: "Mandated client: explain what gets reported and what refusing would cost." },

    { id: "e24", cat: "ethics",
      text: "An 82-year-old woman with advanced dementia is being referred to an adult day program. Her son is her legal guardian.",
      ask: "How should the social worker handle informed consent?",
      opts: [
        ["Have the woman sign the form herself, since the services are for her.", "She lacks the capacity to give informed consent, so her signature alone isn't valid."],
        ["Get consent from her son and explain the program to her simply to seek her assent.", "When a client lacks capacity, consent comes from the legal representative. The client still gets an explanation she can follow."],
        ["Go ahead without consent, since the program is clearly in her best interest.", "A good outcome doesn't replace consent. Her guardian must agree."],
        ["Ask the neighbor who checks on her every day to sign, since she knows her daily routine best.", "A neighbor has no legal authority to consent for her."]
      ],
      c: 1,
      tip: "No capacity? Consent from the legal representative, assent from the client." },

    { id: "e25", cat: "ethics",
      text: "A social worker is inviting families at her agency to take part in a study of a new parenting program.",
      ask: "Which point is MOST important to make clear to them?",
      opts: [
        ["The study could help improve services for many future families.", "That may be true, but it can feel like pressure. It isn't the key point."],
        ["Their names will appear only in the study's private records.", "Privacy matters, but the core protection is that joining is truly voluntary."],
        ["Saying no will not change the services they get here.", "Research consent must be voluntary. Clients need to know refusing or quitting won't cost them services."]
      ],
      c: 2,
      tip: "Research with clients: no penalty for saying no or dropping out." },

    { id: "e26", cat: "ethics",
      text: "A social worker wants to survey 14-year-olds in an after-school program for a research study on bullying.",
      ask: "What consent is needed?",
      opts: [
        ["Written consent from a parent or guardian and the teen's own assent.", "Minors usually can't consent to research on their own. A proxy gives consent and the teen agrees as far as able."],
        ["The teen's consent only, since the survey answers will be anonymous.", "Anonymity doesn't remove the need for a parent or guardian's consent."],
        ["A parent's consent only, since teens can't agree to research.", "Teens should still be asked. Their assent is sought along with the parent's consent."],
        ["Permission from the program director, who is responsible for the youth.", "The director's approval may be needed too, but it doesn't replace consent from parents and teens."]
      ],
      c: 0,
      tip: "Research with minors = parent consent + child assent." },

    { id: "e27", cat: "ethics",
      text: "A social worker is starting the first session of a new support group for people living with chronic pain.",
      ask: "How should she address confidentiality?",
      opts: [
        ["Promise members that what is shared in the group will stay in the group.", "The social worker can't promise what other members will do."],
        ["Have members sign a pledge, which makes breaking confidentiality illegal.", "A pledge can help set norms, but it doesn't make a member's disclosure illegal."],
        ["Wait to raise the topic until members trust each other more.", "Confidentiality should be discussed at the start, before people share."],
        ["Ask members to respect each other's privacy and explain she can't guarantee they will.", "In groups, the worker sets the norm of confidentiality and is honest about its limits."]
      ],
      c: 3,
      tip: "Groups: ask members to keep confidences, but don't guarantee they will." },

    { id: "e28", cat: "ethics",
      text: "A social worker is about to begin counseling with a married couple. She knows that one partner might later share something privately, such as an affair.",
      ask: "What is the BEST way to prepare for this?",
      opts: [
        ["Promise each partner that anything said privately will stay private.", "This can trap the worker into keeping a secret that blocks the couple's work."],
        ["At the start, explain her policy on sharing information between partners and get both to agree.", "With couples and families, the worker should set and explain the rules on shared information up front."],
        ["Wait until a secret comes up, then decide what to share based on what seems most helpful to them.", "Making rules up later is unfair to both partners. They need to know the policy before they share."],
        ["Ask each partner in a separate private meeting whether there are any secrets she should know about.", "This invites secrets before any policy exists for how they will be handled."]
      ],
      c: 1,
      tip: "Couples and families: set the secrets policy at the start." },

    { id: "e29", cat: "ethics",
      text: "A client's employer calls the social worker and asks whether the client has been coming to his counseling sessions. There is no release on file.",
      ask: "What should the social worker say?",
      opts: [
        ["Confirm attendance only, since that isn't clinical information.", "Even confirming that someone is a client is a disclosure."],
        ["Say she can't share any information, not even whether he is a client.", "Without written consent, the social worker should neither confirm nor deny a client relationship."],
        ["Ask the employer to send the request in writing on company letterhead.", "A written request from the employer is still not the client's consent."]
      ],
      c: 1,
      tip: "No release? Don't even confirm the person is a client." },

    { id: "e30", cat: "ethics",
      text: "A client signed a release so her social worker can share treatment progress with her primary care doctor. The doctor's office now asks for her full file, including detailed notes about childhood abuse.",
      ask: "What should the social worker do?",
      opts: [
        ["Send the full file, since the client has already signed a release.", "A release covers only what it names. It doesn't open the whole record."],
        ["Send nothing, since counseling notes can never be shared with doctors.", "The client agreed to share progress for her care. Refusing everything ignores her wishes."],
        ["Share only the progress information the release covers and the doctor needs.", "Disclose the minimum needed for the purpose, within the client's consent. More would need her new permission."],
        ["Send the full file and ask the doctor's office to keep the abuse notes private.", "Asking for privacy doesn't fix sharing more than the client agreed to."]
      ],
      c: 2,
      tip: "A release covers what it names: share the minimum needed." },

    { id: "e31", cat: "ethics",
      text: "A judge orders a social worker to release a client's records in a court case. The client doesn't want them released, and the social worker believes it could harm him.",
      ask: "What should the social worker do?",
      opts: [
        ["Refuse to release the records, since the client has not consented.", "A court order is a legal command. Simply refusing can put the worker in contempt of court."],
        ["Release the full record right away, since a judge has signed and issued the order.", "The worker should first try to protect the client by asking to limit what is released."],
        ["Ask the court to narrow the order or seal the records, then comply as required.", "The Code asks workers to request that the order be withdrawn, limited, or kept under seal. If the court still requires it, they comply."]
      ],
      c: 2,
      tip: "Subpoena: respond, don't just hand over. Court order: ask to narrow or seal, then comply." },

    { id: "e32", cat: "ethics",
      text: "A social worker in a small town wants advice on a hard case at a monthly peer consultation group. Some group members may know the client's family.",
      ask: "How should she present the case?",
      opts: [
        ["Share only what is needed for advice and leave out details that could identify the client.", "Consultation is encouraged. Protect the client by sharing the minimum and removing identifying details."],
        ["Wait until the members who know the family step out, then share the full case.", "Others may still recognize the family from full details. Share the minimum, without identifying details, with everyone."],
        ["Share all the details, since the members are also bound by confidentiality.", "Colleagues' duties don't make extra identifying details necessary, especially in a small town."],
        ["Skip consultation, since any talk about the case breaks confidentiality.", "Consulting without identifying information is ethical and often wise."]
      ],
      c: 0,
      tip: "Consult freely, but without identifying details." },

    { id: "e33", cat: "ethics",
      text: "Two hospital social workers ride a crowded elevator. One starts describing a patient's suicide attempt without saying the patient's name.",
      ask: "What should the other social worker do?",
      opts: [
        ["Answer briefly, since no name was used and the patient can't be identified.", "Others may still recognize the patient from details. Unnamed is not the same as private."],
        ["Join the conversation, then remind her colleague about privacy later this week.", "This keeps the breach going. The issue needs attention now."],
        ["Report the colleague to the hospital's privacy officer right away.", "A quiet word in the moment is the first step for a lapse like this."],
        ["Suggest they wait and talk about the case later in a private space.", "Confidential matters shouldn't be discussed in elevators, hallways, or other public places."]
      ],
      c: 3,
      tip: "Elevators, hallways, cafeterias: no case talk." },

    { id: "e34", cat: "ethics",
      text: "A social worker feels torn between two ethical duties in a case and isn't sure what the right course is.",
      ask: "Using an ethical decision-making model, what should she do FIRST?",
      opts: [
        ["Choose the option that best protects the agency from a lawsuit.", "Risk to the agency is one factor, not the starting point or the deciding value."],
        ["Identify the ethical issues, including the values and duties in conflict.", "Decision-making models begin by naming the dilemma: which values and duties clash."],
        ["Talk with colleagues and her supervisor about possible actions.", "Consultation is important, but it comes after the issues and options are clear."],
        ["List every possible course of action and carefully weigh the risks of each one.", "Weighing options is a later step, after the issues and people affected are identified."]
      ],
      c: 1,
      tip: "Ethical dilemma: name the conflicting values first." },

    { id: "e35", cat: "ethics",
      text: "A supervisor gets along well with her supervisee and often has lunch with her. The supervisee has missed several documentation deadlines, and her yearly review is due.",
      ask: "What should the supervisor do?",
      opts: [
        ["Rate her fairly against the job's stated standards and discuss the missed deadlines.", "Supervisors should evaluate supervisees fairly and respectfully, using clear criteria."],
        ["Give her a strong review, since her direct work with clients is good.", "Leaving out a real problem is not a fair evaluation, and it denies her a chance to improve."],
        ["Ask another supervisor to write the review to protect the friendship.", "The evaluation is the supervisor's job. Handing it off avoids the duty."],
        ["Leave the deadlines out of the formal review and mention them casually over lunch instead.", "Problems should be addressed in the formal review, not in a social setting."]
      ],
      c: 0,
      tip: "Supervisors evaluate fairly, by clear standards, even when it's awkward." },

    { id: "e36", cat: "ethics",
      text: "A clinic social worker is trained in adult substance use treatment. She is assigned a 7-year-old with selective mutism. A colleague down the hall specializes in childhood anxiety.",
      ask: "What should the social worker do?",
      opts: [
        ["Keep the case and read up on selective mutism before the first session.", "Reading alone doesn't make her competent in a new area."],
        ["Keep the case, since her clinical license covers work with all ages.", "A license doesn't mean competence in every area. Practice stays within training and experience."],
        ["Ask to transfer the case to the colleague who has the right expertise.", "Social workers practice within their competence. A skilled colleague is available, so refer."],
        ["Keep the case and tell the parents she will learn as she goes.", "Being honest doesn't make up for not having the needed skills."]
      ],
      c: 2,
      tip: "Outside your expertise and a specialist is nearby? Refer." },

    { id: "e37", cat: "ethics",
      text: "After a two-hour webinar on EMDR, a social worker wants to start using it next week with clients who have trauma histories.",
      ask: "What should she do?",
      opts: [
        ["Use it with clients who agree to try it, since their consent makes it acceptable to do.", "Consent doesn't replace competence. Clients agree to skilled care."],
        ["Complete full training and get supervision from someone skilled in EMDR first.", "New techniques need proper study, training, and supervision before use with clients."],
        ["Use it, since EMDR has strong research support for treating trauma.", "A strong method can still harm clients when used without training."]
      ],
      c: 1,
      tip: "New technique = training + supervision before use." },

    { id: "e38", cat: "ethics",
      text: "A social worker with 30 years of experience tells a newer colleague that she skips trainings because she already knows what works.",
      ask: "What does the NASW Code say about this?",
      opts: [
        ["Experienced social workers may rely on practice wisdom instead of training.", "Experience is valuable, but the Code still expects ongoing learning."],
        ["Only the training hours required for license renewal are an ethical duty.", "The Code's duty goes beyond the minimum hours a state requires."],
        ["Ongoing training mainly matters for newer workers who are still building skills.", "The duty to keep learning applies to all social workers at every stage."],
        ["Social workers should keep up with new knowledge in their field throughout their careers.", "The Code asks social workers to stay current with emerging knowledge and take part in continuing education."]
      ],
      c: 3,
      tip: "Continuing education is a career-long duty." },

    { id: "e39", cat: "ethics",
      text: "Before an audit, a supervisor asks a social worker to write a note for a session held last month and date it as if it were written that day.",
      ask: "What is the BEST response?",
      opts: [
        ["Decline, and offer to write a late entry clearly marked with today's date.", "Backdating is falsifying a record. A late entry, dated honestly, keeps the record accurate."],
        ["Write the note as asked, since the session really did take place.", "A real session doesn't make a false date honest."],
        ["Write the note, but keep a private record of when it was really written.", "The official record would still be false."],
        ["Refuse, and report the supervisor to the state licensing board right away.", "Declining is right, but going straight to the board skips talking with the supervisor and using agency channels."]
      ],
      c: 0,
      tip: "Never backdate. Late entries carry the real date." },

    { id: "e40", cat: "ethics",
      text: "A program director must cut services after losing part of a grant. Some staff suggest quietly dropping the clients who are hardest to serve.",
      ask: "What is the BEST approach?",
      opts: [
        ["Drop the hardest-to-serve clients, since that helps more people per dollar.", "This targets the most vulnerable clients and is not a fair or open process."],
        ["Let each worker privately decide which of their own clients to drop from services.", "Private, case-by-case cuts invite bias and inconsistency."],
        ["Use open, fair criteria that don't discriminate, and apply them consistently.", "Administrators should allocate resources through open and fair procedures that don't discriminate."],
        ["Keep all services running and hope new funding arrives in time.", "Ignoring the shortfall risks a sudden collapse of services for everyone."]
      ],
      c: 2,
      tip: "Scarce resources: open, fair, nondiscriminatory rules." },

    { id: "e41", cat: "ethics",
      text: "In the staff break room, a shelter social worker hears a coworker joke about a resident's hygiene and call her “a lost cause.”",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Report the comments to the shelter director so there is a formal record of them.", "Going up the chain comes later, if a direct talk doesn't work."],
        ["Talk privately with the coworker about how the comments disrespect residents.", "Start with the colleague directly. Clients' dignity and worth deserve respect even when they aren't present."],
        ["Let it go, since no residents were in the room to hear it.", "Disrespect shapes how staff treat clients, whether or not clients hear it."],
        ["Raise it at the next staff meeting without naming the coworker.", "A direct, private conversation is the first and most respectful step."]
      ],
      c: 1,
      tip: "Dignity and worth apply behind closed doors too. Talk to the colleague first." },

    { id: "e42", cat: "ethics",
      text: "A state starts requiring all benefit applications to be filed online. Many of a social worker's older and rural clients have no internet and are losing benefits.",
      ask: "What is the BEST response?",
      opts: [
        ["Help each affected client apply online at the agency, one at a time, as they come in.", "This helps some people, but it leaves the unfair rule in place for everyone else."],
        ["Encourage clients to write to their state legislators about the rule.", "Advocacy is good, but clients still need help now, and the worker has her own duty to act."],
        ["Wait for agency leadership to decide how to respond to the change.", "Social workers have their own duty to pursue social justice."],
        ["Help clients apply now and work with others to push for other ways to apply.", "Social workers meet immediate needs and also advocate to change policies that shut people out."]
      ],
      c: 3,
      tip: "Help the person now AND change the system." },

    { id: "e43", cat: "ethics",
      text: "A social worker and a coworker who share several clients disagree sharply about scheduling. She is tempted to tell one client that the coworker is hard to work with.",
      ask: "What should she do?",
      opts: [
        ["Keep clients out of it and work out the conflict with her coworker directly.", "Social workers shouldn't drag clients into disputes with colleagues. Resolve it between the two of them."],
        ["Tell the client, since clients have a right to know about the people on their care team.", "Clients' rights don't include being pulled into staff conflicts."],
        ["Tell the client, but only if the client asks why appointments keep changing.", "She can explain a schedule change without criticizing her coworker."]
      ],
      c: 0,
      tip: "Never use clients in a dispute with a colleague." },

    { id: "e44", cat: "ethics",
      text: "A social worker told a colleague that he often gives clients wrong information about benefit rules. Two months later, clients are still being misinformed and losing benefits.",
      ask: "What should the social worker do NEXT?",
      opts: [
        ["Talk with the colleague again and offer to share her own notes on the rules.", "She already tried a direct talk, and clients are still being hurt. It's time to go further."],
        ["File a complaint with the state licensing board right away.", "Agency channels usually come before the licensing board."],
        ["Raise the concern with their supervisor through the agency's usual channels.", "When talking with a colleague doesn't fix incompetence, take it through proper agency channels."],
        ["Quietly tell their shared clients to bring all benefit questions to her instead.", "This works around the problem and leaves other clients at risk."]
      ],
      c: 2,
      tip: "Colleague incompetence: talk first, then agency channels, then the board." },

    { id: "e45", cat: "ethics",
      text: "A supervisor often comments on a supervisee's body and has asked her out several times. She has said no each time.",
      ask: "How does the NASW Code view the supervisor's behavior?",
      opts: [
        ["It is acceptable as long as no relationship actually begins.", "Unwanted sexual comments and advances are harassment whether or not anything follows."],
        ["It is sexual harassment, which the Code forbids toward supervisees.", "The Code bars sexual harassment of supervisees, students, trainees, colleagues, and clients."],
        ["It is a human resources and workplace matter rather than an ethics issue.", "It may break workplace rules too, but it is also a clear ethics violation."],
        ["It breaks the Code only if the supervisee was once the supervisor's client.", "The ban on sexual harassment covers colleagues and supervisees, not only clients."]
      ],
      c: 1,
      tip: "Sexual harassment of anyone a social worker works with is unethical." },

    { id: "e46", cat: "ethics",
      text: "A new social worker sees that her agency's website lists her as a licensed clinical social worker (LCSW). She has passed her exam but is still waiting for the license.",
      ask: "What should she do?",
      opts: [
        ["Leave it, since the license will arrive within a few weeks.", "Until the license is issued, the listing is false. Clients may rely on it."],
        ["Leave it, since the agency wrote the bio and not her.", "Social workers must correct misstatements of their credentials, even ones others made."],
        ["Ask the agency to correct it right away.", "Social workers claim only credentials they actually hold and fix errors made by others."]
      ],
      c: 2,
      tip: "Wrong credential listed? Get it fixed, even if someone else wrote it." },

    { id: "e47", cat: "ethics",
      text: "A social worker opening a private practice wants reviews for her website. She plans to ask several current clients to write them.",
      ask: "What is the MAIN ethical concern?",
      opts: [
        ["Current clients may feel pressured to agree because of the power difference.", "The Code says not to seek testimonials from current clients or others open to undue influence."],
        ["Online reviews are never allowed for any kind of social work practice, public or private.", "The concern is asking vulnerable people, not reviews as such."],
        ["Reviews might reveal clients are in therapy, so she would need to edit them.", "Editing doesn't fix the core problem of pressuring current clients."],
        ["Asking is fine as long as clients may post their reviews anonymously.", "Anonymity doesn't remove the pressure clients feel when their own provider asks."]
      ],
      c: 0,
      tip: "No testimonials from current clients." },

    { id: "e48", cat: "ethics",
      text: "A child protection worker has heard many children describe abuse. Lately she has intrusive images of their stories, trouble sleeping, and startles easily.",
      ask: "What is she MOST likely experiencing?",
      opts: [
        ["Burnout from a heavy workload", "Burnout is exhaustion and cynicism from work strain. It doesn't involve trauma symptoms like intrusive images."],
        ["Countertransference toward her clients", "Countertransference is the worker's emotional reaction to a client based on her own history. It isn't a trauma response."],
        ["Compassion satisfaction", "This is the good feeling that comes from helping others, the opposite of what she describes."],
        ["Secondary traumatic stress", "Hearing others' trauma can cause PTSD-like symptoms in helpers, such as intrusive images, poor sleep, and jumpiness."]
      ],
      c: 3,
      tip: "Trauma symptoms from hearing clients' trauma = secondary traumatic stress." },

    { id: "e49", cat: "ethics",
      text: "A social worker at an understaffed agency feels drained, has grown cynical about clients, and believes nothing she does makes a difference. She has not been exposed to unusual trauma.",
      ask: "What does this BEST describe?",
      opts: [
        ["Secondary traumatic stress", "STS comes from exposure to others' trauma and brings trauma symptoms. Neither is described here."],
        ["Burnout", "Emotional exhaustion, cynicism, and a sense of not getting anything done are the hallmarks of burnout, often from workplace strain."],
        ["Countertransference", "Countertransference is a reaction to a specific client, not a general drained and cynical state."]
      ],
      c: 1,
      tip: "Burnout = exhausted + cynical + ineffective." },

    { id: "e50", cat: "ethics",
      text: "A supervisor notices that a supervisee with a heavy trauma caseload has become irritable, is missing deadlines, and says she “can't feel anything” after sessions.",
      ask: "What should the supervisor do FIRST?",
      opts: [
        ["Raise the concern in supervision and plan together for support and self-care.", "Self-care is part of ethical practice. Supervisors name the signs early and help find support."],
        ["Give her a formal written warning about the missed deadlines.", "Discipline first misses what is driving the problem."],
        ["Move all of her trauma cases to others without discussing it with her.", "Acting without her leaves her out and disrupts clients' care."],
        ["Wait to see whether things improve on their own once the busy season is over.", "Signs of compassion fatigue tend to grow when ignored, and clients may be affected."]
      ],
      c: 0,
      tip: "Self-care is an ethical duty. Supervisors help, not punish." },

    { id: "e51", cat: "ethics",
      text: "A social worker is the only counselor in a small rural county. Her car breaks down, and the only garage within 60 miles is owned by a current client.",
      ask: "What is the BEST way to handle this?",
      opts: [
        ["Transfer the client to a counselor in the next county before using the garage.", "There is no nearby counselor, so this costs the client his services over a car repair. The client's needs come first."],
        ["Use the garage, and ask the client for a discount since they know each other.", "Asking for special treatment uses the relationship for personal gain. That is exploitation."],
        ["Talk with the client about it, set clear boundaries, and document the plan.", "In rural practice some dual relationships can't be avoided. The worker protects the client by naming it, setting boundaries, and documenting."],
        ["Use the garage, and say nothing, since the contact is only about the car.", "Ignoring the overlap leaves the client unsure how to act. Unavoidable dual relationships should be discussed openly."]
      ],
      c: 2,
      tip: "Rural dual relationship you can't avoid? Discuss it, set boundaries, document." },

    { id: "e52", cat: "ethics",
      text: "A social worker is shopping at the grocery store and sees a current client in the next aisle with his wife and children. They have never talked about meeting in public.",
      ask: "What should the social worker do?",
      opts: [
        ["Wait for the client to greet her first, and keep it brief.", "This protects confidentiality. The client chooses whether anyone learns he is in services. Raise the topic at the next session."],
        ["Walk over and greet him by name so he doesn't feel ignored or snubbed.", "Greeting him first may force him to explain to his family who she is. That risks his privacy."],
        ["Leave the store right away so that no contact can happen.", "Fleeing is not needed. A brief, client-led exchange is fine, and the client may feel rejected if he sees her leave."]
      ],
      c: 0,
      tip: "In public, the client makes the first move. Talk about it at the next session." },

    { id: "e53", cat: "ethics",
      text: "A wealthy client in the middle of treatment gives his social worker a watch worth about $400. He says he wants to show how much the sessions mean to him.",
      ask: "What is the BEST response?",
      opts: [
        ["Accept it, since the client can easily afford a gift of this size.", "The client's wealth doesn't change the problem. A costly gift can blur boundaries and create a sense of debt."],
        ["Accept it on behalf of the agency and put it in the office.", "This still takes a valuable gift from a client. It also sidesteps talking about what the gift means."],
        ["Accept it, and note the gift and its value in the case record.", "Documenting a boundary problem doesn't fix it. A gift this large should be declined."],
        ["Thank him, decline the watch, and explore what it means to him.", "A costly gift during treatment risks the relationship. Decline kindly and use the moment to talk about his feelings."]
      ],
      c: 3,
      tip: "Small gift: maybe. Expensive gift: decline kindly and explore it." },

    { id: "e54", cat: "ethics",
      text: "A county social worker helps families choose group homes for their adult children with disabilities. Her husband recently bought one of the group homes on the county's list.",
      ask: "What should the social worker do?",
      opts: [
        ["Keep quiet, as long as she treats that home the same as the others.", "Even fair treatment looks biased when the conflict is hidden. Conflicts of interest must be disclosed."],
        ["Tell her supervisor and step back from placements at that home.", "The Code says to disclose real or possible conflicts and resolve them so the client's interests come first. Telling the agency and stepping back does that."],
        ["Steer families away from that home so no one can say she favors it.", "This harms families who might be best served there. Their choice should not depend on her conflict."],
        ["Tell families about the home, since she knows its staff and quality well.", "Promoting her husband's business puts her own interests ahead of the client's. This is the conflict itself."]
      ],
      c: 1,
      tip: "Conflict of interest? Disclose it and step back from the decision." },

    { id: "e55", cat: "ethics",
      text: "A residential treatment program asks a social worker to invite one of her current clients to tell her story in a fundraising video. The client is doing well and often says she owes the program everything.",
      ask: "What should the social worker do?",
      opts: [
        ["Ask the client, and make clear that saying no won't affect her care.", "Even with that promise, the Code says not to seek testimonials from current clients. Her gratitude makes a free yes unlikely."],
        ["Ask the client, and have her sign a written release before filming.", "A signed form doesn't remove the pressure she may feel. Asking a current client is the problem."],
        ["Tell the program she can't ask a current client, and explain why.", "The Code says not to solicit testimonials from current clients or others open to undue influence. The power imbalance makes free consent unlikely."]
      ],
      c: 2,
      tip: "Testimonials: never ask current clients. Gratitude plus power = no free yes." },

    { id: "e56", cat: "ethics",
      text: "A 38-year-old client with schizophrenia has been stable for two years. He is not a danger to himself or others. He tells his social worker he plans to stop his antipsychotic because of weight gain.",
      ask: "What is the BEST response?",
      opts: [
        ["Explore his concerns and encourage him to talk with his prescriber.", "A capable adult has the right to make choices about his treatment. Help him make an informed choice and connect with the prescriber."],
        ["Tell him that stopping is not an option and that he must keep taking it.", "This ignores his right to self-determination. The worker can share concerns but can't order him."],
        ["Call his psychiatrist and ask about starting an involuntary hold.", "He is not a danger to himself or others. An involuntary hold would be far too restrictive."],
        ["Accept his decision and close the case, since he no longer wants treatment.", "He wants to stop one medication, not services. Closing the case leaves him without support during a risky change."]
      ],
      c: 0,
      tip: "Capable client refusing meds: respect, inform, connect to the prescriber." },

    { id: "e57", cat: "ethics",
      text: "A hospital social worker meets with a 52-year-old patient who is alert and oriented. He is a Jehovah's Witness and is refusing a blood transfusion before surgery. His adult son wants the team to override him.",
      ask: "What should the social worker do?",
      opts: [
        ["Ask the ethics committee to find a legal way to give the transfusion.", "A competent adult's informed refusal is legally and ethically his to make. The committee can't overrule it."],
        ["Help the son explain to his father why the transfusion is needed.", "This sides with the family against a capable patient. It pressures him to give up a religious choice."],
        ["Stay out of it, since this is a medical decision for the doctors.", "Supporting patient rights and wishes is a core social work role on the team. Stepping back fails the patient."],
        ["Check privately that the choice is his own, and record his wishes.", "A capable adult may refuse treatment for religious reasons. Make sure the choice is informed and free, then support it."]
      ],
      c: 3,
      tip: "Capable adult + religious refusal = his right. Check it's free and informed." },

    { id: "e58", cat: "ethics",
      text: "On a home visit, a social worker finds that an 81-year-old woman with dementia has almost no food and her utilities are shut off. Her son, who manages her money, recently bought a new truck. State law requires reporting suspected elder abuse.",
      ask: "What should the social worker do?",
      opts: [
        ["Ask the son to explain where his mother's money has been going.", "Questioning the possible abuser can tip him off and put her at more risk. It is also not required before reporting."],
        ["Ask the woman whether she wants a report made about her son.", "With dementia, she may not be able to weigh this choice. The law requires a report of reasonable suspicion either way."],
        ["Report it to Adult Protective Services, following state law.", "Signs of financial exploitation and neglect of a vulnerable adult call for a report. Proof is not needed, only reasonable suspicion."],
        ["Watch the situation for a few more weeks to gather more evidence.", "Waiting leaves a vulnerable adult without food or heat. Mandated reporters don't need proof."]
      ],
      c: 2,
      tip: "Elder neglect or exploitation suspected? Report to APS. Don't investigate first." },

    { id: "e59", cat: "ethics",
      text: "A 34-year-old client tells her social worker that her uncle sexually abused her when she was 10. The uncle died several years ago. She says she has never told anyone.",
      ask: "What should the social worker do?",
      opts: [
        ["Report the past abuse to child protective services right away.", "She is an adult now and the uncle is dead, so no child is at risk. A report isn't the right step here."],
        ["Respond with support and let her lead what she works on.", "The worker's first job is to honor the disclosure and follow the client's goals. No child is at current risk."],
        ["Encourage her to file a police report so the abuse is on record.", "Pushing her toward a report puts the worker's agenda ahead of the client's own choices."]
      ],
      c: 1,
      tip: "Adult disclosing old abuse, no child at risk now: support her and follow her lead." },

    { id: "e60", cat: "ethics",
      text: "A client who was passed over for a promotion says angrily, “Somebody at that place is going to pay for this.” He doesn't name anyone or say anything more.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Ask him what he means, including any plan, target, or means.", "A vague threat calls for assessment first. Duty to warn depends on a serious threat against an identifiable person."],
        ["Call his employer and warn them that he made a threat.", "Breaking confidentiality before assessing is premature. There may be no real danger at all."],
        ["Call the police and ask them to check on his workplace.", "Calling police before learning more is not the least restrictive step. Assess before acting."],
        ["Treat the comment as venting and gently move on to another topic.", "Ignoring possible danger is risky. The worker needs to find out what he meant."]
      ],
      c: 0,
      tip: "Vague threat = assess first. Duty to warn needs a serious threat to someone identifiable." },

    { id: "e61", cat: "ethics",
      text: "A social worker realizes she forgot to write a progress note for a session she held three days ago.",
      ask: "What should she do?",
      opts: [
        ["Write the note now, and date it the day of the session.", "Backdating makes the record false. The note must show when it was actually written."],
        ["Write it now, label it a late entry, and give both dates.", "A late entry is fine when it is clearly marked. It shows the date written and the date of the session."],
        ["Skip the note, since too much time has passed to recall it.", "Every service needs to be documented. Three days later is still close enough to write an accurate note."],
        ["Add the details to her next progress note for this client.", "Folding one session into another blurs the record. Each service should have its own clear entry."]
      ],
      c: 1,
      tip: "Late note: write it, mark it late, show both dates. Never backdate." },

    { id: "e62", cat: "ethics",
      text: "A social worker reviewing a paper case file sees that last week she wrote the wrong medication dose in a client's note.",
      ask: "What should she do?",
      opts: [
        ["Black out the error so no one is misled, and write the correct dose.", "Hiding the original text looks like tampering. Records must show what was changed."],
        ["Remove the page and rewrite the whole note with the correct dose.", "Replacing pages destroys the original record. That can look like falsifying records."],
        ["Cross it out with one line, add the right dose, date and initial it.", "A proper correction keeps the original readable and shows who changed it and when."]
      ],
      c: 2,
      tip: "Fix a record with one line, the correction, date, and initials. Never erase." },

    { id: "e63", cat: "ethics",
      text: "A hospital team has just found that a 76-year-old Korean American woman has advanced cancer. Her adult children ask the team not to tell her, saying that in their family the children carry this news.",
      ask: "What should the social worker do?",
      opts: [
        ["Tell the patient the diagnosis right away, since she has a right to know.", "Rushing in ignores her own wishes, which may match her family's. Ask her first how she wants to handle news."],
        ["Agree with the children's request, out of respect for their culture.", "The family's view may not be the patient's. Only she can say whether she wants to know."],
        ["Ask the doctors to decide, since sharing a diagnosis is a medical call.", "This leaves out the patient's own wishes. The social worker can help find out what she wants."],
        ["Ask the patient privately what she wants to know and who should decide.", "This respects both culture and autonomy. Some patients want family to handle it, others want to know. Ask her."]
      ],
      c: 3,
      tip: "Family asks you to withhold news? Ask the patient what she wants to know." },

    { id: "e64", cat: "ethics",
      text: "A hospice client with terminal cancer asks her social worker about medical aid in dying and what she would need to know about it.",
      ask: "What is the BEST response?",
      opts: [
        ["Gently change the subject, since talking about it may push her toward it.", "Avoiding the topic leaves her alone with an important question. Discussing it is not encouraging it."],
        ["Explore her question, and share what the law and agency policy allow.", "Laws differ by state, so the worker follows the law and agency policy. She learns the client's fears and wishes first, then gives accurate information and refers as needed."],
        ["Tell her it sounds like a reasonable choice, given how much she suffers.", "Giving a personal opinion may sway her. The worker should explore, not steer."],
        ["Ask her family to come in so they can help her think it through.", "She asked the worker, not her family. Bringing them in without her okay breaks her privacy."]
      ],
      c: 1,
      tip: "Asked about aid in dying? Explore first, then share what the law and agency policy allow." },

    { id: "e65", cat: "ethics",
      text: "A client is grieving a breakup but doesn't meet criteria for any mental health diagnosis. His insurance won't pay without a diagnosis, and he asks the social worker to “put down depression or something.”",
      ask: "What should the social worker do?",
      opts: [
        ["Decline, explain why, and discuss other options, like a sliding fee.", "A diagnosis must be accurate. Giving a false one to get paid is insurance fraud, but the worker can help him find another way to pay."],
        ["Give him a mild depression diagnosis, since he does have some symptoms.", "Some symptoms are not a diagnosis. Inflating it to get paid is fraud and stays on his record."],
        ["Use an adjustment disorder code, since insurers rarely question it.", "Picking a code because it won't be questioned is still fraud if he doesn't meet the criteria."],
        ["Agree, since he is the one asking and it helps him get care.", "The client's request doesn't make a false diagnosis honest. The worker is responsible for accurate billing."]
      ],
      c: 0,
      tip: "Diagnose what's there. A diagnosis made up for payment is fraud." },

    { id: "e66", cat: "ethics",
      text: "A client's insurance pays for only one session per day. After a crisis, the social worker met with her twice on Monday. Her supervisor tells her to bill the second session as if it happened on Tuesday.",
      ask: "What should the social worker do?",
      opts: [
        ["Do as told, since the supervisor is responsible for billing decisions.", "Following orders doesn't excuse fraud. Each social worker answers for her own records."],
        ["Report the supervisor to the insurance company right away.", "Going outside first skips a step. Talk with the supervisor directly before going up the chain."],
        ["Decline, and tell the supervisor billing must show the real dates.", "Billing must reflect what was done and when. Raise the concern directly with the supervisor first."],
        ["Bill it on Tuesday, but write the real date in her own notes.", "This still sends false information to the insurer. Keeping a private true record doesn't fix it."]
      ],
      c: 2,
      tip: "Bill the real date, every time. Raise it with the supervisor first." },

    { id: "e67", cat: "ethics",
      text: "During a video session, a client says she took a bottle of pills an hour ago. Then the video freezes and the call drops. At the start of the session, she confirmed she was at her home address on file.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Keep trying to reconnect the video so she can assess the client.", "There is no time for more assessment. A possible overdose is a medical emergency."],
        ["Call emergency services and send them to the client's address.", "Danger is imminent, so act now. Use the emergency line that covers her area. This is why telehealth workers confirm location every session."],
        ["Call the client's emergency contact and ask them to check on her.", "The contact may be far away or slow. Emergency services should be called first."],
        ["Text the client and ask her to call back as soon as she can.", "She may be unable to answer. Waiting for a reply wastes time she may not have."]
      ],
      c: 1,
      tip: "Telehealth: confirm location every session. Overdose = call emergency services first." },

    { id: "e68", cat: "ethics",
      text: "An agency lets social workers text clients on agency phones for scheduling only. A client starts texting her social worker long messages about past trauma late at night.",
      ask: "What is the BEST response?",
      opts: [
        ["Answer each message in detail so the client feels supported.", "This turns texting into therapy without privacy safeguards. It also sets up expectations the worker can't meet."],
        ["Stop answering her texts so she learns to wait for sessions.", "Silence leaves her confused and unsupported. She needs to know why, and where to turn in a crisis."],
        ["Block her number, since she is breaking the agency's rules.", "This is harsh and may feel like rejection. A clear, kind explanation is better."],
        ["Reply briefly with the texting limits and crisis options.", "Set clear limits on what texting is for, give crisis resources, and talk it through at the next session."]
      ],
      c: 3,
      tip: "Texting: set clear limits, give crisis options, talk about it in session." },

    { id: "e69", cat: "ethics",
      text: "A client says she has been sober for a month. A coworker tells the social worker that the client's public social media shows photos of her drinking at a party last weekend.",
      ask: "What should the social worker do?",
      opts: [
        ["Not look, and talk with the client about sobriety and relapse.", "The Code says to avoid searching for client information online without a compelling reason and, when fitting, consent. Talk to the client instead."],
        ["Look at the photos, since they are public and anyone can see them.", "Public doesn't mean appropriate. Searching a client online without a strong reason harms trust."],
        ["Look at the photos, then show them to the client in the next session.", "Confronting her with secret research damages the relationship and her trust."]
      ],
      c: 0,
      tip: "Don't search clients online. Ask the client directly." },

    { id: "e70", cat: "ethics",
      text: "A client in a private practice lost her job and her insurance. She signed a clear fee agreement at intake, owes for two sessions, and says she can't keep paying. She is stable and not at risk of harm to herself or others.",
      ask: "What should the social worker do?",
      opts: [
        ["End services today and mail her a list of other providers.", "Ending suddenly is abandonment. Termination needs discussion and a planned transition."],
        ["Keep seeing her and let the balance grow, then send it to collections later.", "Letting debt pile up without talking about it harms the client. Fee issues should be discussed openly."],
        ["Talk it over and plan a transition to low-cost care with her.", "Ending for nonpayment can be ethical when the client is safe, the fee terms were clear, and the effects are discussed and planned."],
        ["Keep seeing her, but cut sessions to 15 minutes until she can pay again.", "Short sessions may not meet her needs. It is better to plan with her than to cut care on your own."]
      ],
      c: 2,
      tip: "Can't pay? Talk, plan, and transfer care. Never just stop." },

    { id: "e71", cat: "ethics",
      text: "A new social worker is assigned to a Somali Muslim family. Before the first visit, she reads a book on Somali culture and plans her approach around it.",
      ask: "What is the BEST way for her to practice cultural humility?",
      opts: [
        ["Ask the family about their own beliefs and practices.", "Cultural humility means learning from the client, not assuming. Each family lives its culture in its own way."],
        ["Use what she read to guide the visit and avoid offending them.", "Reading helps, but applying general facts to every family leads to stereotypes."],
        ["Ask the agency to assign a worker who shares their culture.", "The family didn't ask for this, and it skips the worker's own duty to learn. Every worker must be able to serve diverse clients."],
        ["Treat them exactly as she treats every other family.", "Ignoring culture misses what matters to the family. Being culture-blind is not being fair."]
      ],
      c: 0,
      tip: "Cultural humility = the client is the expert on their own culture." },

    { id: "e72", cat: "ethics",
      text: "A school social worker reviews her notes and sees that she describes Black boys as “aggressive” and white boys as “frustrated” for very similar behavior.",
      ask: "What should she do?",
      opts: [
        ["Assume the notes are accurate, since she wrote what she saw.", "The pattern points to bias in how she sees behavior. Ignoring it lets the harm continue."],
        ["Ask to have the Black students moved to another worker's caseload.", "Moving students avoids the problem rather than fixing it. It also treats them differently because of race."],
        ["Stop writing any descriptions of student behavior in her notes.", "Notes still need to describe behavior. The fix is objective language, not no language."],
        ["Take it to supervision and use objective, behavior-based terms.", "Naming implicit bias and getting supervision is anti-racist practice. Describe behavior, not labels."]
      ],
      c: 3,
      tip: "Spot your own bias? Name it, take it to supervision, describe behavior." },

    { id: "e73", cat: "ethics",
      text: "During intake, a social worker tells a Chinese American client who was born in Ohio, “Your English is so good!” The client goes quiet and looks away.",
      ask: "What is the BEST response?",
      opts: [
        ["Explain that she meant it as a compliment, not an insult.", "Defending intent puts the focus on the worker. Impact matters more than intent."],
        ["Own the hurtful comment, apologize, and invite the client to respond.", "When a worker commits a microaggression, she owns it, repairs it, and makes room for the client's response."],
        ["Move on with the intake to avoid making things more awkward.", "Ignoring the moment can damage trust. The client noticed and the worker should address it."],
        ["Offer to transfer the client to a Chinese American social worker instead.", "This avoids repair and assumes the client wants a match. Own the mistake instead."]
      ],
      c: 1,
      tip: "Made a microaggression? Own it, apologize, invite the client in." },

    { id: "e74", cat: "ethics",
      text: "A Deaf client who uses American Sign Language is coming in for counseling. Her hearing sister offers to interpret so the agency won't have to pay for one.",
      ask: "What should the social worker do?",
      opts: [
        ["Accept the sister's offer, since the client knows and trusts her.", "Family members aren't neutral, may not be skilled interpreters, and limit what the client can say freely."],
        ["Use written notes back and forth during the session instead.", "Written English may not be the client's first language. Notes are not equal access for counseling."],
        ["Arrange a qualified ASL interpreter, at no cost to the client.", "Deaf clients have a right to effective communication. A trained, neutral interpreter protects accuracy and privacy."]
      ],
      c: 2,
      tip: "Deaf client: qualified ASL interpreter, agency pays. Not family, not notes." },

    { id: "e75", cat: "ethics",
      text: "A 27-year-old autistic client gives short, literal answers and avoids eye contact. A colleague's note from intake says she has “poor engagement and seems guarded.”",
      ask: "What is the BEST approach?",
      opts: [
        ["Ask how she communicates best and adjust the way she works.", "Neurodiversity-affirming practice adapts to the client, for example with clear questions and written summaries. Her style is not poor engagement."],
        ["Keep the note as is, since it describes what the colleague saw.", "The note reads normal autistic communication as resistance. That label can follow her and shape care."],
        ["Work with her on making eye contact so others see her as engaged.", "This asks her to mask her natural style. The worker should adapt, not the client."],
        ["Refer her to an autism specialist and close her case at this agency.", "Being autistic doesn't mean she needs a different agency. Workers should adapt to serve her."]
      ],
      c: 0,
      tip: "Neurodivergent client: adapt to how she communicates. Don't call it resistance." },

    { id: "e76", cat: "ethics",
      text: "An undocumented mother tells a clinic social worker she is afraid to get her son's asthma treated or tell anyone about her abusive partner. She fears being reported to immigration.",
      ask: "What should the social worker do?",
      opts: [
        ["Promise her that nothing she says will ever be shared with anyone.", "Confidentiality has limits, such as child safety. Promising more than the worker can keep breaks trust later."],
        ["Advise her to avoid the clinic and other services until her status changes.", "This leaves her son and herself without care. Many services are open regardless of status."],
        ["Explain privacy and its limits, and link her to immigrant legal help.", "Honest information about privacy plus trusted legal help lets her make safe choices for herself and her son."],
        ["Tell her the agency must check her status before it can help her.", "Social workers don't act as immigration enforcement. This adds fear without reason."]
      ],
      c: 2,
      tip: "Undocumented client: be honest about privacy limits, link to legal help." },

    { id: "e77", cat: "ethics",
      text: "A refugee woman needs an interpreter for counseling. The only local interpreter for her language belongs to her small religious community. She says she can't speak freely in front of him.",
      ask: "What should the social worker do?",
      opts: [
        ["Reassure her that the interpreter is bound by confidentiality, and go ahead.", "Her fear is real in a small community. A promise of confidentiality may not make her feel safe enough to talk."],
        ["Arrange a phone or video interpreter from outside her community.", "Clients should have interpreters they can trust. A remote interpreter protects her privacy and her ability to speak openly."],
        ["Hold the session in simple English so no interpreter is needed.", "Limited English limits what she can share and understand. It's not effective communication."]
      ],
      c: 1,
      tip: "Client doesn't trust the interpreter? Find another one, even remotely." },

    { id: "e78", cat: "ethics",
      text: "A woman in her early twenties comes to a clinic with her “boyfriend,” who answers questions for her and holds her ID. She says she works long hours at a salon, lives there, and has no money of her own.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Give her a trafficking hotline card while the boyfriend is in the room.", "If he is controlling her, this could put her in danger. Information should be shared privately."],
        ["Ask the boyfriend why he keeps her ID and answers for her.", "Confronting a possible trafficker can put her at serious risk."],
        ["Call the police and report possible trafficking right away.", "She is an adult and hasn't been asked anything yet. Safe assessment comes first, with her input."],
        ["Find a safe way to speak with her alone and assess her situation.", "Many signs of trafficking are present. Talking privately is the first step to learning what is happening and what she wants."]
      ],
      c: 3,
      tip: "Trafficking signs? First get her alone safely, then assess." },

    { id: "e79", cat: "ethics",
      text: "A 15-year-old scratched a teacher's car in the school parking lot. The principal wants a long suspension. The school social worker suggests a restorative approach.",
      ask: "What BEST describes a restorative approach here?",
      opts: [
        ["A firm meeting where the student is told the rules and the consequences.", "This is still punishment-focused. Restorative work centers on harm and repair, not just rules."],
        ["A meeting where the student hears the harm done and helps repair it.", "Restorative practices bring together those affected to talk about the harm and agree on how to make things right."],
        ["A shorter suspension, plus a written apology the student must turn in.", "A required apology with punishment isn't restorative. Repair comes from a shared process."],
        ["Individual counseling for the student, instead of any consequence.", "Restorative practice still holds the student accountable. It just does so through repair."]
      ],
      c: 1,
      tip: "Restorative = talk about the harm, then repair it together." },

    { id: "e80", cat: "ethics",
      text: "A social worker at a housing agency notices that Latino families seem to wait much longer for intake appointments than other families with similar needs.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Gather the facts and raise the pattern with her supervisor.", "Social workers act against discrimination. Start inside the agency with clear information so it can be fixed."],
        ["File a complaint with the state civil rights office right away.", "Outside action may come later. First check the facts and raise it inside the agency."],
        ["Quietly tell the Latino families they should each file complaints.", "This puts the burden on clients and skips the worker's own duty to act."],
        ["Leave it alone, since scheduling is not part of her job.", "Social workers have a duty to challenge unfair practices in their own agency."]
      ],
      c: 0,
      tip: "Unfair pattern in your agency? Get the facts and raise it inside first." },

    { id: "a21", cat: "assess",
      text: "A 52-year-old woman comes in for low mood. Over two sessions the social worker has asked about her family, work, friends, and alcohol use. She has also mentioned feeling tired all the time and losing weight without trying.",
      ask: "Which area is MOST important to add to the assessment?",
      opts: [
        ["Her hobbies and how she spends her free time.", "Leisure is part of a full picture, but it won't explain her physical symptoms."],
        ["Her school history and highest level of education.", "Useful background, but not the gap that matters most here."],
        ["How satisfied she is with the agency's services so far.", "Feedback is good practice, but it isn't an assessment priority."],
        ["Her physical health, recent checkups, and medications.", "A biopsychosocial assessment includes the bio part. Fatigue and weight loss can come from a medical problem, so this gap matters most."]
      ],
      c: 3,
      tip: "Biopsychosocial = bio too. Physical symptoms? Ask about health and meds." },

    { id: "a22", cat: "assess",
      text: "A Lakota client tells the social worker that her grandmother was taken to a boarding school as a child and punished for speaking her language. She says her family has struggled with grief, drinking, and distrust of agencies for generations.",
      ask: "Which concept BEST describes what the client is describing?",
      opts: [
        ["Historical trauma", "Right. Historical trauma is the shared, cumulative wounding of a group from mass harm like forced removal, passed down across generations."],
        ["Secondary traumatic stress", "That describes helpers who absorb trauma from hearing others' stories, not a community's history."],
        ["Paranoid thinking", "Distrust of agencies has real historical roots here. Calling it paranoia pathologizes a reasonable response."]
      ],
      c: 0,
      tip: "Group harm passed down through generations = historical trauma." },

    { id: "a23", cat: "assess",
      text: "During a home visit, an 81-year-old woman's bills are past due even though her pension is deposited every month. Her nephew, who moved in recently, answers every question for her, and she looks at him before she speaks.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Ask the nephew to explain why the bills haven't been paid.", "This alerts the possible abuser before the social worker has heard from the client."],
        ["Arrange to talk with the woman alone, away from her nephew.", "Possible financial exploitation. Interview the older adult privately so she can speak freely and safely."],
        ["Ask the woman in front of her nephew whether she feels safe.", "She can't answer honestly with him in the room. Talk with her privately."],
        ["Help the nephew set up automatic bill payments for her.", "This may hand more control to the person who could be exploiting her."]
      ],
      c: 1,
      tip: "Suspected elder abuse = talk with the older adult alone." },

    { id: "a24", cat: "assess",
      text: "A teacher reports that a 7-year-old often comes to school hungry. On a home visit, the social worker finds a clean apartment and a caring, attentive mother. The family's food benefits were cut off last month because of a paperwork error.",
      ask: "What is the BEST response?",
      opts: [
        ["Report the mother to child protective services for neglect.", "Poverty alone is not neglect. The mother is caring and the cause is a lost benefit."],
        ["Tell the mother she must find a way to feed her son daily.", "Lecturing ignores the real barrier and damages trust."],
        ["Help restore her benefits and link her to food pantries now.", "The need is food, caused by a lost benefit. Meet the concrete need and fix the paperwork problem."],
        ["Ask the school to give the boy extra snacks and close the case.", "Snacks help a little, but the whole family is still without food."]
      ],
      c: 2,
      tip: "Poverty is not neglect. Meet the concrete need." },

    { id: "a25", cat: "assess",
      text: "A woman tells the social worker about her relationship with her boyfriend. The social worker is assessing how dangerous the situation is.",
      ask: "Which detail should MOST concern the social worker about the risk of a deadly attack?",
      opts: [
        ["He once choked her until she nearly passed out.", "Right. Past strangulation is one of the strongest warning signs that a partner may later kill."],
        ["He yells at her when he has been drinking.", "Verbal abuse matters, but it is not the strongest sign of lethal risk."],
        ["He criticizes the way she raises her children.", "Hurtful and controlling, but a weaker danger sign than past strangulation."],
        ["He stops speaking to her for days after a fight.", "Emotional withholding is harmful, but less tied to lethal risk."]
      ],
      c: 0,
      tip: "IPV danger signs: strangulation, guns, threats to kill, recent separation." },

    { id: "a26", cat: "assess",
      text: "A woman has cared for her father, who has dementia, for three years. She tells the social worker, “Lately I snap at him over little things, and then I feel awful.”",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Recommend that her father move into a memory care unit.", "Placement may come up later, but it's a plan made before any assessment."],
        ["Teach her some techniques for calmly redirecting a person with dementia.", "Helpful later, but it skips assessing her stress and both people's safety."],
        ["Tell her that snapping at him is a form of elder abuse.", "This shames a caregiver who is reaching out and may stop her from talking."],
        ["Explore her stress, her supports, and whether either is unsafe.", "Assess caregiver strain first: sleep, help, respite, and whether things ever get physical."]
      ],
      c: 3,
      tip: "Caregiver strain: assess her load, supports, and safety before advising." },

    { id: "a27", cat: "assess",
      text: "A 64-year-old grandmother has taken in her two grandchildren after their parents were arrested. The social worker is completing a kinship care assessment.",
      ask: "Which is a well-known strength of kinship care?",
      opts: [
        ["Relatives usually get more money and services than foster parents.", "The reverse is often true. Kin caregivers tend to get less support, which the assessment should look at."],
        ["Placing children with relatives removes the need for a permanency plan.", "Children in kinship care still need a permanency plan."],
        ["Children can keep ties to their family, culture, and community.", "Right. Kinship care keeps children connected to people and traditions they know, which can soften the trauma of removal."]
      ],
      c: 2,
      tip: "Kinship care = family and cultural continuity, but often less support." },

    { id: "a28", cat: "assess",
      text: "A foster mother tells the social worker that her new 9-year-old foster son hides bread and crackers under his bed, even though there is always plenty of food in the house.",
      ask: "How should the social worker understand this behavior?",
      opts: [
        ["As stealing that needs firm rules and consequences.", "Punishing a survival behavior can make the child feel less safe."],
        ["As a common response to past hunger or neglect.", "Food hoarding is common in children who went without food. It's a coping behavior, so ask about his history."],
        ["As a sign of an eating disorder that needs treatment.", "Hiding food after deprivation is not, by itself, an eating disorder."],
        ["As a bid for attention from his new foster mother.", "This misreads a survival behavior as attention seeking."]
      ],
      c: 1,
      tip: "Food hoarding in foster care = past hunger. Reassure, don't punish." },

    { id: "a29", cat: "assess",
      text: "A man was released from prison two days ago after 12 years. He is staying with a cousin who has told him he must leave by Friday. He has a parole check-in next week.",
      ask: "Which area is MOST urgent to assess at this first meeting?",
      opts: [
        ["His feelings about the crime that led to his sentence.", "This may matter later, but it's not the urgent need."],
        ["His long-term career goals and interest in job training programs.", "Work matters for reentry, but not before a place to sleep."],
        ["Where he will live after Friday and what parole allows.", "Housing is the immediate crisis. Parole rules can limit where he may live, so assess both now."],
        ["His relationships with his family before prison.", "Family history is part of a full assessment, not today's priority."]
      ],
      c: 2,
      tip: "Reentry: housing and parole conditions first." },

    { id: "a30", cat: "assess",
      text: "During a summer heat wave, a social worker visits an 83-year-old woman who lives alone. Her apartment is very hot and has no air conditioning. She takes a water pill, says she feels dizzy, and hasn't been drinking much.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Schedule a follow-up visit for when the weather cools down.", "Waiting leaves her at risk of heat illness, which can be deadly for older adults."],
        ["Apply for a utility program that helps pay for air conditioning.", "Good for later, but it won't protect her today."],
        ["Finish the planned assessment, then talk about the heat.", "Her physical safety comes before the planned agenda."],
        ["Help her get to a cool place and get medical care now.", "Dizziness, heat, low fluids, and a diuretic point to heat illness. Physical safety comes first."]
      ],
      c: 3,
      tip: "Climate events hit older adults hardest. Physical safety first." },

    { id: "a31", cat: "assess",
      text: "A 34-year-old man has major depression and drinks heavily most days. He is not in withdrawal. He asks whether he should deal with his drinking or his depression first.",
      ask: "What is the BEST approach?",
      opts: [
        ["Treat both at the same time in an integrated plan.", "Right. For co-occurring disorders, integrated treatment of both together is the recommended approach."],
        ["Treat the drinking first, then the depression once he's sober.", "Waiting leaves the depression untreated, and it often fuels the drinking."],
        ["Treat the depression first, since he drinks to cope with it.", "The drinking keeps worsening his mood. Both need attention now."],
        ["Refer him to two separate programs that don't coordinate.", "Separate, uncoordinated care is what integrated treatment was designed to replace."]
      ],
      c: 0,
      tip: "Co-occurring disorders = integrated treatment, both at once." },

    { id: "a32", cat: "assess",
      text: "A woman just diagnosed with breast cancer talks in detail about survival rates, research studies, and treatment options. When the social worker asks how she feels about the diagnosis, she quickly returns to the statistics.",
      ask: "Which defense mechanism is she MOST likely using?",
      opts: [
        ["Denial", "She fully accepts the diagnosis. Denial would mean refusing to accept that it's real."],
        ["Sublimation", "Sublimation turns unacceptable urges into socially valued activity. That doesn't fit here."],
        ["Intellectualization", "She uses facts and analysis to keep painful feelings at a distance."],
        ["Suppression", "Suppression is a conscious choice to set feelings aside for later, not a reflexive retreat into facts."]
      ],
      c: 2,
      tip: "Facts and figures instead of feelings = intellectualization." },

    { id: "a33", cat: "assess",
      text: "A social worker is assessing a 20-year-old college student who is worried about her eating.",
      ask: "Which sign MOST strongly suggests that she makes herself vomit?",
      opts: [
        ["Fine, soft hair growing on her arms and back", "This hair (lanugo) comes with starvation, as in anorexia, not vomiting."],
        ["Calluses or scrapes on the backs of her knuckles", "Right. Repeatedly using the fingers to trigger vomiting scrapes the knuckles on the teeth."],
        ["Weighing herself several times every day", "Common in many eating concerns, but not a sign of vomiting."],
        ["Wearing loose, baggy clothes even in hot summer weather", "Can point to body image concerns, but not to vomiting."]
      ],
      c: 1,
      tip: "Knuckle calluses, worn tooth enamel, puffy cheeks = purging." },

    { id: "a34", cat: "assess",
      text: "A 76-year-old man with early Alzheimer's disease refuses a surgery his doctor recommends. His children want the social worker to say he can't make his own decisions.",
      ask: "What should the social worker assess?",
      opts: [
        ["Whether his choice matches what his doctor recommends.", "Disagreeing with the doctor isn't proof of incapacity. People with capacity can make choices others dislike."],
        ["Whether his children agree with his decision.", "Family agreement doesn't decide capacity."],
        ["Whether his diagnosis means he can no longer decide.", "A diagnosis alone doesn't remove capacity. Capacity is about a specific decision."],
        ["Whether he understands the choice, its risks, and his options.", "Capacity is decision-specific: can he understand, weigh the risks, reason, and state a steady choice?"]
      ],
      c: 3,
      tip: "Capacity is decision-specific. A diagnosis is not the answer." },

    { id: "a35", cat: "assess",
      text: "A 14-year-old tells the school social worker that someone he met online is threatening to send his private photos to his classmates unless he pays. He is shaking and says, “My life is over.”",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Ask him directly whether he is thinking about killing himself.", "Sextortion has been linked to youth suicides, and he says his life is over. Check his safety first."],
        ["Help him send a small payment so the threats will stop.", "Paying usually leads to more demands. Victims are advised not to pay."],
        ["Tell him to delete all the messages and his accounts right away.", "Deleting destroys evidence needed for a report. Save it instead."],
        ["Explain that sending photos was a mistake he has to own.", "Blaming adds shame and raises risk. He is the victim of a crime."]
      ],
      c: 0,
      tip: "Sextortion: safety first, don't pay, save evidence, report." },

    { id: "a36", cat: "assess",
      text: "A client says, “My marriage is great, there's nothing to talk about.” Earlier in the session he mentioned that he has slept on the couch for a month and that he and his wife barely speak.",
      ask: "What is the BEST response?",
      opts: [
        ["“It sounds like your marriage is going well right now.”", "This reflects only one side and ignores the clear mixed message."],
        ["“Why would you say it's great when it obviously isn't?”", "Too harsh and judging. It invites defensiveness, not reflection."],
        ["“You said it's great, and also that you barely speak. Help me understand.”", "A gentle confrontation puts both statements side by side so he can look at the gap himself."],
        ["“Okay, let's move on to talk about your job instead.”", "Dropping the topic misses an important discrepancy."]
      ],
      c: 2,
      tip: "Confronting = name both statements gently, then let the client explain." },

    { id: "a37", cat: "assess",
      text: "A client says, “My family is just impossible.” The social worker responds, “When you say impossible, what happens at home?”",
      ask: "Which interviewing skill is the social worker using?",
      opts: [
        ["Reflecting feelings", "Reflecting would name the emotion, such as, “You sound worn out.”"],
        ["Interpreting", "Interpreting offers the worker's idea of a deeper meaning. This response just asks for more detail."],
        ["Summarizing", "Summarizing pulls together several points from the session. This is one question."],
        ["Clarifying", "Right. The social worker asks the client to explain a vague word so both understand the same thing."]
      ],
      c: 3,
      tip: "Clarifying = “What do you mean by...?” Turn vague words into specifics." },

    { id: "a38", cat: "assess",
      text: "A social worker is doing an intake with a Somali-speaking client through a trained interpreter in the room.",
      ask: "Which is BEST practice for the social worker?",
      opts: [
        ["Look at the interpreter and say, “Ask her how she's sleeping.”", "Talking to the interpreter about the client sidelines the client."],
        ["Look at the client and speak to her directly, in short sentences.", "Speak to the client in the first person and pause often so everything can be interpreted accurately."],
        ["Ask the interpreter to summarize the client's long answers.", "Summaries lose details. Ask for everything to be interpreted."],
        ["Let the interpreter skip any parts that seem off topic to save time.", "Details that seem off topic can matter. Nothing should be left out."]
      ],
      c: 1,
      tip: "With an interpreter: talk TO the client, first person, short chunks." },

    { id: "a39", cat: "assess",
      text: "A refugee woman is being assessed through an interpreter from her small local community. She gives short, vague answers about her home life and keeps glancing at the interpreter.",
      ask: "What should the social worker do NEXT?",
      opts: [
        ["Continue, since interpreters must keep everything confidential.", "Rules don't erase her fear of gossip in a small community. Her comfort matters."],
        ["Offer her a phone interpreter from outside her community.", "In a small community the interpreter may know her. A phone or video interpreter from elsewhere can make her feel safer."],
        ["Ask her husband to come and interpret at the next session.", "Family members shouldn't interpret, especially about home life, where abuse could be a concern."]
      ],
      c: 1,
      tip: "Small community? Offer an outside interpreter so the client can speak freely." },

    { id: "a40", cat: "assess",
      text: "A 45-year-old man says he has thought about suicide on bad nights this month. He has no plan right now. He mentions that he keeps two hunting rifles at home.",
      ask: "What is the BEST way to address the rifles?",
      opts: [
        ["Help him arrange to store them away from home for now.", "Lethal means counseling: putting time and distance between a person and a gun saves lives, and storing guns away from home is one of the best options."],
        ["Tell him he is required by law to give his guns to police.", "This isn't accurate as a general rule, and it can damage trust and safety planning."],
        ["Leave the topic alone, since he has no current plan.", "Suicidal crises can come on quickly. Access to a gun greatly raises the chance a crisis turns deadly."],
        ["Suggest he lock the rifles up and keep the key himself.", "Locking helps a little, but he still has easy access in a crisis."]
      ],
      c: 0,
      tip: "Suicide risk + guns = lethal means counseling. Time and distance save lives." },

    { id: "a41", cat: "assess",
      text: "A 16-year-old tells the social worker she cuts her arms when she feels overwhelmed. She says it calms her down and that she doesn't want to die.",
      ask: "What is the BEST response?",
      opts: [
        ["Treat it as a suicide attempt and arrange a hospital admission today.", "Self-harm without suicidal intent isn't an attempt. Hospitalization isn't the first step without other risk."],
        ["Accept that she isn't suicidal and focus on other issues.", "Self-harm is a risk factor for later suicide. It needs attention."],
        ["Ask her to sign a contract promising to stop cutting.", "No-harm contracts don't work and may stop her from being honest."],
        ["Explore what the cutting does for her and assess for suicide.", "Self-injury is often a way to cope with pain, but it raises suicide risk, so assess both."]
      ],
      c: 3,
      tip: "Self-harm without intent to die still needs a suicide assessment." },

    { id: "a42", cat: "assess",
      text: "A social worker is assessing a man who says he gets so angry at his neighbor that he wants to “teach him a lesson.”",
      ask: "Which factor is the BEST predictor of future violence?",
      opts: [
        ["How angry he appears during the session", "Anger in the moment tells you little about whether he will act."],
        ["Whether he has a mental health diagnosis", "Most people with mental illness are not violent. A diagnosis is a weak predictor."],
        ["Whether he has been violent in the past", "Right. Past violent behavior is the best single predictor of future violence."]
      ],
      c: 2,
      tip: "Best predictor of violence = past violence." },

    { id: "a43", cat: "assess",
      text: "A social worker asks a client how ready she is to cut back on her drinking, on a scale of 0 to 10. She says, “Maybe a 4.”",
      ask: "Which follow-up question is BEST?",
      opts: [
        ["“Why aren't you higher than a 4?”", "This invites her to list reasons not to change, which builds resistance."],
        ["“A 4 is pretty low. What would it take to get you to a 10?”", "Judging her number and jumping to 10 skips where she is now."],
        ["“What makes it a 4 and not a 1?”", "This invites her to name her own reasons for change, which builds motivation."],
        ["“Do you think a 4 is good enough?”", "A yes-or-no question that hints at judgment and gets little information."]
      ],
      c: 2,
      tip: "Scaling: ask “Why not lower?” to draw out reasons for change." },

    { id: "a44", cat: "assess",
      text: "During a mental status exam, a client says she feels “great.” She speaks slowly, looks down, and her eyes fill with tears several times.",
      ask: "How should the social worker record her mood and affect?",
      opts: [
        ["Mood euthymic; affect euthymic and appropriate.", "This ignores what the social worker observed."],
        ["Mood “great” in her words; affect tearful, sad, incongruent.", "Mood is what the client reports. Affect is what the worker sees. Here they don't match."],
        ["Mood depressed; affect cheerful and bright.", "This swaps the two terms. Mood is self-reported, affect is observed."],
        ["Leave mood blank, since her words can't be trusted.", "Mood is recorded in the client's own words, even when it doesn't match affect."]
      ],
      c: 1,
      tip: "Mood = what client says. Affect = what you see." },

    { id: "a45", cat: "assess",
      text: "A client firmly believes that a TV news anchor is sending him secret personal messages during the evening broadcast. No one can talk him out of it.",
      ask: "How should the social worker describe this on a mental status exam?",
      opts: [
        ["Auditory hallucination", "A hallucination is hearing or seeing something that isn't there. The broadcast is real; his belief about it is false."],
        ["Illusion", "An illusion is a misperception of a real sensation, like seeing a coat as a person."],
        ["Flight of ideas", "Flight of ideas is fast speech jumping between topics, a thought process problem."],
        ["Delusion", "A fixed false belief held despite evidence. Believing the TV speaks to you personally is a delusion of reference."]
      ],
      c: 3,
      tip: "Hallucination = false perception. Delusion = false fixed belief." },

    { id: "a46", cat: "assess",
      text: "A social worker at a community mental health center hears from four clients on the same morning.",
      ask: "Which client should the social worker help get medical care MOST urgently?",
      opts: [
        ["A client on lithium who has vomiting, diarrhea, shaky hands, and confusion", "These are signs of lithium toxicity, which can be dangerous. This client needs medical care right away."],
        ["A client who started an SSRI last week and has mild nausea", "Mild stomach upset is a common early side effect that often fades."],
        ["A client on an antipsychotic who has gained five pounds in three months", "Weight gain should be raised with the prescriber, but it isn't an emergency."],
        ["A child on a stimulant who isn't hungry at lunch", "Low appetite is a common, expected side effect to mention at the next visit."]
      ],
      c: 0,
      tip: "Lithium + vomiting, diarrhea, tremor, confusion = urgent medical care." },

    { id: "a47", cat: "assess",
      text: "A woman has taken an antipsychotic for many years. The social worker notices she keeps smacking her lips and moving her tongue in and out without seeming aware of it.",
      ask: "What is the BEST response?",
      opts: [
        ["Help her let her prescriber know about the movements soon.", "These may be tardive dyskinesia, a possible long-term side effect. The prescriber needs to know so it can be assessed."],
        ["Advise her to stop the medication until she sees the doctor.", "Social workers don't give dosing advice. Stopping suddenly can cause relapse."],
        ["Treat the movements as anxiety and teach her relaxation skills.", "This misreads a possible medication side effect and delays care."]
      ],
      c: 0,
      tip: "Lip smacking, tongue movements on antipsychotics = possible tardive dyskinesia. Tell the prescriber." },

    { id: "a48", cat: "assess",
      text: "A 16-year-old started an antidepressant two weeks ago. His mother says he is restless and not sleeping. Today he tells the social worker he has started thinking about dying.",
      ask: "What should the social worker do?",
      opts: [
        ["Reassure him that side effects usually fade in a few weeks.", "New suicidal thoughts in a young person on an antidepressant are a warning sign, not a side effect to wait out."],
        ["Suggest he skip doses until he sees his psychiatrist.", "Social workers don't advise on dosing. That's the prescriber's call."],
        ["Assess his suicide risk and contact his prescriber today.", "Antidepressants carry a warning about suicidal thinking in youth early in treatment. Assess safety and alert the prescriber now."],
        ["Note it and bring it up at his psychiatry visit next month.", "A month is far too long to wait with new suicidal thoughts."]
      ],
      c: 2,
      tip: "Youth + new antidepressant + new suicidal thoughts = assess and call the prescriber now." },

    { id: "a49", cat: "assess",
      text: "A client has taken a benzodiazepine for anxiety every day for six years. She tells the social worker she plans to quit “cold turkey” this weekend.",
      ask: "What is the BEST response?",
      opts: [
        ["Praise her decision and help her plan the weekend.", "Supporting a sudden stop ignores a real medical risk."],
        ["Encourage her to talk to her prescriber about tapering.", "Stopping a long-used benzodiazepine suddenly can cause dangerous withdrawal, including seizures. A taper is planned with the prescriber."],
        ["Suggest she cut her dose in half this weekend to make it easier.", "Social workers don't give dosing instructions."]
      ],
      c: 1,
      tip: "Benzos: never stop suddenly. The prescriber plans the taper." },

    { id: "a50", cat: "assess",
      text: "A social worker at a walk-in clinic has four people waiting.",
      ask: "Whom should the social worker see FIRST?",
      opts: [
        ["A man who needs a letter for his housing application due today", "Time-sensitive, but no one is in danger."],
        ["A woman who got an eviction notice that takes effect in two weeks", "Serious, but there is time to act."],
        ["A teen who is crying after a breakup with her boyfriend", "She is upset, but nothing points to danger yet. Check in soon."],
        ["A man who says voices are telling him to hurt himself", "Command hallucinations to self-harm are an immediate safety risk. See him first."]
      ],
      c: 3,
      tip: "Triage: danger to self or others comes first." },

    { id: "a51", cat: "assess",
      text: "A social worker and a client who wants to return to work are writing goals together.",
      ask: "Which goal is BEST written?",
      opts: [
        ["The client will feel more confident about finding a job.", "Not measurable and has no time frame."],
        ["The client will apply for at least three jobs a week for the next month.", "Specific, measurable, achievable, relevant, and time-bound: a SMART goal."],
        ["The client will work hard to improve his job situation.", "Vague. There's no way to tell when it has been met."],
        ["The client will get a full-time job with good pay.", "Partly outside his control, with no clear steps or time frame."]
      ],
      c: 1,
      tip: "SMART: Specific, Measurable, Achievable, Relevant, Time-bound." },

    { id: "a52", cat: "assess",
      text: "A Mexican American client with depression tells the social worker she also sees a curandera, a traditional healer, and wants that to be part of her care.",
      ask: "What is the BEST response?",
      opts: [
        ["Tell her to stop seeing the healer, since it isn't evidence based.", "This dismisses her culture and her right to choose her care."],
        ["Respect her choice but leave the healer out of the treatment plan.", "Leaving it out misses a source of strength she values."],
        ["Learn about the healing practices and include them in her plan.", "Culturally responsive planning builds on what the client values, while checking that nothing is harmful."]
      ],
      c: 2,
      tip: "Culturally responsive plans include the client's own healing practices." },

    { id: "a53", cat: "assess",
      text: "A 28-year-old woman with a mild intellectual disability has panic attacks. She reads at about a second-grade level.",
      ask: "Which approach is MOST appropriate?",
      opts: [
        ["Adapted CBT with simple words, pictures, role play, and practice.", "Adjust the method to her abilities. Concrete, visual, hands-on steps work well."],
        ["Insight-focused therapy that explores her early childhood.", "Abstract, insight-based work is a poor fit for her learning style."],
        ["A medication referral only, since therapy won't help her.", "People with intellectual disabilities can benefit from adapted therapy."],
        ["Standard CBT worksheets at the usual pace so that nothing gets missed.", "Text-heavy worksheets at the usual pace don't fit her reading level."]
      ],
      c: 0,
      tip: "Match the intervention to the client's abilities. Adapt, don't exclude." },

    { id: "a54", cat: "assess",
      text: "A client has met with the social worker for four months for social anxiety. The social worker is considering whether she is ready to end services.",
      ask: "Which sign BEST shows she is ready for termination?",
      opts: [
        ["She says she really enjoys the sessions and looks forward to them.", "Enjoying sessions doesn't show the goals have been met."],
        ["She has met her goals and uses her coping skills on her own.", "Readiness = goals met and skills used independently in daily life."],
        ["The agency needs to open spots for new clients.", "Agency needs alone don't decide when a client is ready."]
      ],
      c: 1,
      tip: "Ready to end = goals met + skills used on her own." },

    { id: "a55", cat: "assess",
      text: "A Spanish-speaking mother with no car wants a parenting class. The social worker finds one listed in the county resource guide.",
      ask: "What should the social worker do BEFORE making the referral?",
      opts: [
        ["Check that it offers Spanish, is near a bus line, and has openings.", "A referral only helps if the client can actually use it. Check language, transport, timing, and openings."],
        ["Give her the phone number so she can look into it herself.", "Handing over a number without checking fit often leads to a dead end."],
        ["Refer her right away, since the class is in the guide.", "Resource guides go out of date. Check first."]
      ],
      c: 0,
      tip: "Check the fit before you refer: language, cost, transport, openings." },

    { id: "i21", cat: "interv",
      text: "Residents of a senior apartment building tell a social worker that their elevator has been broken for three weeks. Management ignores their calls.",
      ask: "What is the BEST way to apply an empowerment approach?",
      opts: [
        ["Call the building manager yourself and demand a repair date.", "It may get results, but the worker acts for residents instead of building their power to act."],
        ["Help residents plan a meeting and present their demands together.", "Empowerment builds clients' own skills and collective voice so they can change their situation."],
        ["File a complaint with the city housing office on the residents' behalf.", "Doing it for them skips the residents' own voice. Outside complaints can come later if needed."],
        ["Reassure residents that management will get to the repair soon.", "False reassurance dismisses a real problem and leaves residents powerless."]
      ],
      c: 1,
      tip: "Empowerment = clients act for themselves; the worker builds their capacity." },

    { id: "i22", cat: "interv",
      text: "On a hospital rehab team, a nurse has started holding long talks with a patient's family about their grief and money worries. The social worker had been working with the family on these issues.",
      ask: "What should the social worker do FIRST?",
      opts: [
        ["Report the nurse to the unit manager for working outside of her role.", "Going up the chain comes after a direct conversation, and no one is in danger."],
        ["Step back from the family so the two services don't overlap.", "Withdrawing leaves the family's psychosocial needs to someone else without any plan."],
        ["Talk with the nurse directly to clarify roles and coordinate care.", "Role blurring on a team is best handled by talking with the colleague first and agreeing on who does what."],
        ["Raise the problem at the next team meeting in front of everyone.", "Calling her out publicly skips the respectful first step of talking with her one on one."]
      ],
      c: 2,
      tip: "Role conflict on a team: talk to the colleague first, then coordinate." },

    { id: "i23", cat: "interv",
      text: "A 58-year-old man with advanced heart failure is still getting treatment that his cardiologist hopes will extend his life. He wants to keep that treatment and also wants help with breathlessness, pain, and planning ahead.",
      ask: "Which service is the BEST fit right now?",
      opts: [
        ["Palliative care, which can be given alongside life-extending treatment.", "Palliative care eases symptoms and supports planning at any stage of a serious illness, together with curative treatment."],
        ["Hospice care, since his heart failure is advanced and can no longer be cured.", "Hospice is generally for a prognosis of about six months or less, with comfort care instead of curative treatment."],
        ["Neither, since symptom care begins only after treatment stops.", "Wrong. Symptom relief and advance care planning can start as soon as a serious illness is diagnosed."]
      ],
      c: 0,
      tip: "Palliative = any stage, alongside treatment. Hospice = last months of life, comfort instead of cure." },

    { id: "i24", cat: "interv",
      text: "A child welfare worker looks into a neglect report. A single father who was recently laid off has little food in the house and his kids have missed some school, but they are healthy, bonded to him, and not in danger.",
      ask: "What is the BEST plan?",
      opts: [
        ["Offer in-home services and link him to food and job help.", "With no safety threat, reasonable efforts go toward keeping the family together and meeting the needs behind the report."],
        ["Place the children with relatives until he finds work again.", "Removal is for safety threats that services can't manage. Poverty alone is not a reason to separate a family."],
        ["Close the case without services, since there is no danger.", "The family has real unmet needs. Supports now can prevent a future crisis."],
        ["Require parenting classes before the case can be closed.", "Parenting skills are not the problem here. The need is food, school routines, and income."]
      ],
      c: 0,
      tip: "No immediate danger = keep the family together and bring services in." },

    { id: "i25", cat: "interv",
      text: "A 2-year-old has been in foster care for four months. The agency works with his mother toward reunification while also preparing his foster parents to adopt him if reunification fails.",
      ask: "What is this approach called?",
      opts: [
        ["Kinship care", "Kinship care is placement with relatives or close family friends."],
        ["Concurrent planning", "Working on reunification and a backup permanent plan at the same time shortens the child's time in care."],
        ["Family preservation services", "Family preservation services aim to prevent removal in the first place."]
      ],
      c: 1,
      tip: "Concurrent planning = Plan A (reunify) and Plan B (another permanent home) at the same time." },

    { id: "i26", cat: "interv",
      text: "In the sixth session, a client says, “Last week it felt like you were taking my husband's side.” She seems guarded today.",
      ask: "What should the social worker do NEXT?",
      opts: [
        ["Invite her to say more about it and acknowledge how it felt to her.", "Exploring a rupture openly and without defensiveness repairs the alliance and often makes it stronger."],
        ["Explain that she was staying neutral and did not take either side.", "Defending herself puts the worker's view ahead of the client's experience."],
        ["Note the comment and move on to the goals planned for today.", "Ignoring a rupture leaves it to grow and can lead to dropout."],
        ["Offer to refer her to another social worker she may trust more.", "Premature. Most ruptures can be repaired by talking about them."]
      ],
      c: 0,
      tip: "Alliance rupture? Name it, explore it, own your part. The alliance is a top predictor of outcome." },

    { id: "i27", cat: "interv",
      text: "A clinic social worker sees that many clients are losing Medicaid because the renewal forms are long and confusing. Several have missed medical care as a result.",
      ask: "What is the BEST macro-level response?",
      opts: [
        ["Help each client fill out the renewal forms one at a time.", "Helpful case advocacy, but it doesn't change the process that keeps causing the problem."],
        ["Tell clients to call the Medicaid office and complain directly.", "This puts the burden back on clients and does not use the worker's view of the pattern."],
        ["Wait to see whether the problem improves at the next renewal cycle.", "Clients are already missing care. Waiting lets the harm continue."],
        ["Document the pattern and bring it to leaders and policymakers.", "A pattern across many clients calls for cause (policy) advocacy, backed by data, to change the system."]
      ],
      c: 3,
      tip: "One client = case advocacy. A pattern across many = cause advocacy, built on data." },

    { id: "i28", cat: "interv",
      text: "Tenants in a building owned by a large company have had no heat for weeks. Polite requests have failed, so they hold a rally outside the company's office and alert local news.",
      ask: "Which community organizing model does this reflect?",
      opts: [
        ["Locality development", "Locality development uses consensus and broad local cooperation, not pressure on an opponent."],
        ["Social planning", "Social planning relies on experts and data to design services, not on residents' protest."],
        ["Social action", "Social action organizes people with less power to confront those with more and demand change."]
      ],
      c: 2,
      tip: "Locality development = consensus. Social planning = experts and data. Social action = confront power." },

    { id: "i29", cat: "interv",
      text: "A client going through a hard divorce has started calling the social worker's office line ten or more times a day. She gets angry when calls aren't returned within the hour.",
      ask: "What is the BEST response?",
      opts: [
        ["Stop answering her calls so the pattern is not rewarded.", "Cutting her off without a plan is punitive and could leave a real crisis unanswered."],
        ["Agree on set check-in times and a crisis line for urgent needs.", "Good limits are clear, consistent, and respectful, and they still give the client a way to get help."],
        ["Give her your personal cell number so she can always reach you.", "This blurs boundaries and makes the pattern harder to manage."],
        ["Return every call within the hour to keep her trust for now.", "This can't be sustained and reinforces the pattern instead of building her coping."]
      ],
      c: 1,
      tip: "Limit setting = clear, consistent, respectful, with a plan for real needs." },

    { id: "i30", cat: "interv",
      text: "A domestic violence shelter wants to become more trauma-informed.",
      ask: "Which change BEST reflects trauma-informed care principles?",
      opts: [
        ["Ask each new resident to describe her abuse in detail at intake.", "Forcing detailed disclosure early can retraumatize. Residents should choose what to share and when."],
        ["Add stricter curfews and nightly room checks to keep everyone safe.", "Heavy control can mirror an abuser's control. Safety should be built with residents, not imposed on them."],
        ["Have staff set each resident's goals to lower her stress.", "Taking decisions away removes voice and choice, a core principle."],
        ["Explain house rules and the reasons for them, and offer choices.", "Transparency, trust, and choice are core trauma-informed principles that restore a sense of control."]
      ],
      c: 3,
      tip: "Trauma-informed: safety, trust and transparency, peer support, collaboration, voice and choice, culture." },

    { id: "i31", cat: "interv",
      text: "A woman's ex-husband died suddenly. They divorced years ago, but she feels deep sadness. She is sleeping, eating, and working as usual. She says, “I feel silly. I don't really have the right to be this upset.”",
      ask: "What is the BEST response?",
      opts: [
        ["Remind her that after a divorce the loss is not really hers to mourn.", "This repeats the very message that is making her grief harder."],
        ["Suggest she put her energy into her current relationships instead.", "Redirecting her away from the loss dismisses it."],
        ["Validate her grief and explain that unrecognized losses still hurt.", "This is disenfranchised grief. Naming and validating it helps her grieve openly."],
        ["Assess her for depression, since the grief seems out of proportion.", "Her reaction is a normal grief response, not a sign of a disorder."]
      ],
      c: 2,
      tip: "Disenfranchised grief = a loss others don't recognize (ex-partners, pets, miscarriage, overdose). Validate it." },

    { id: "i32", cat: "interv",
      text: "A man who drinks heavily every day wants to quit. He had a seizure the last time he stopped drinking suddenly.",
      ask: "Which level of care should the social worker recommend FIRST?",
      opts: [
        ["Weekly outpatient counseling while he cuts back on his own", "Stopping without medical care is dangerous given his past withdrawal seizure."],
        ["Medically supervised withdrawal management", "Alcohol withdrawal can cause seizures and death. A history of seizures calls for medical detox first."],
        ["A mutual-help group such as AA, starting this week", "Peer support can help later, but it does not manage dangerous withdrawal."]
      ],
      c: 1,
      tip: "Past withdrawal seizures or DTs = medically managed detox first." },

    { id: "i33", cat: "interv",
      text: "A client who had been sober for eight months drank at a wedding last weekend. She says, “I've ruined everything. I might as well give up.”",
      ask: "What is the BEST response?",
      opts: [
        ["Tell her she will need to restart treatment from the beginning.", "This confirms her all-or-nothing thinking and ignores eight months of progress."],
        ["Point out that the slip shows her current plan is clearly not working.", "One lapse does not mean the plan failed. This feeds her hopelessness."],
        ["Suggest she avoid all weddings and parties from now on.", "Blanket avoidance is not realistic and skips understanding what happened."],
        ["Treat it as a lapse to learn from and review what led up to it.", "Relapse prevention treats a slip as information. Countering 'I blew it' thinking keeps a lapse from becoming a relapse."]
      ],
      c: 3,
      tip: "A slip is not a full relapse. Watch for the 'I've blown it' trap (abstinence violation effect)." },

    { id: "i34", cat: "interv",
      text: "A father ordered by family court to attend counseling sits with his arms crossed and says, “I'm only here because the judge made me.”",
      ask: "What is the BEST response?",
      opts: [
        ["“You didn't choose this. Let's look at what the court requires and what's up to you.”", "Acknowledging the pressure and being clear about his choices lowers resistance with involuntary clients."],
        ["“If you won't take part, I'll have to report that to the court.”", "Leading with a threat increases resistance and harms the relationship."],
        ["“Let's set the court aside and talk about your childhood instead.”", "Ignoring the mandate avoids the main issue he just raised."],
        ["“Lots of fathers feel that way at first, but you'll see it helps.”", "Premature reassurance brushes off his feelings."]
      ],
      c: 0,
      tip: "Involuntary clients: acknowledge the pressure, be honest about requirements, and find what they DO choose." },

    { id: "i35", cat: "interv",
      text: "A woman is admitted to an inpatient psychiatric unit after a suicide attempt.",
      ask: "When should discharge planning begin?",
      opts: [
        ["Once her symptoms have stabilized", "Waiting this long leaves too little time to arrange housing, follow-up care, and supports."],
        ["A day or two before her expected discharge date", "Last-minute planning raises the risk of gaps in care after she leaves."],
        ["At admission", "Discharge planning starts at admission so aftercare is ready. The weeks after discharge are a high-risk time."]
      ],
      c: 2,
      tip: "Discharge planning starts at admission." },

    { id: "i36", cat: "interv",
      text: "A man with depression has stopped seeing friends and spends most days in bed. He says he will start doing things again once he feels more motivated.",
      ask: "What is the BEST next step using behavioral activation?",
      opts: [
        ["Wait until his motivation comes back before setting any activity goals.", "In depression, waiting for motivation keeps the cycle going."],
        ["Schedule small, doable activities now, before motivation returns.", "Behavioral activation holds that action comes first and mood and motivation follow."],
        ["Explore the childhood roots of his loss of interest in things.", "That is an insight-oriented approach, not behavioral activation."],
        ["Have him write down his negative thoughts in a daily journal.", "Thought records are a cognitive technique. Behavioral activation targets what he does."]
      ],
      c: 1,
      tip: "Behavioral activation: do first, feel better later. Start small and schedule it." },

    { id: "i37", cat: "interv",
      text: "A client in DBT says that a few times a week her emotions spike so high she can't think straight. She has a safety plan and no current thoughts of self-harm.",
      ask: "Which skill is BEST to teach for those peak moments?",
      opts: [
        ["Check the facts to see whether her emotion fits the actual situation.", "Useful for emotion regulation, but it needs a calmer mind than she has at her peak."],
        ["Use DEAR MAN to ask others clearly for what she needs.", "That is an interpersonal effectiveness skill, not a way to bring down extreme arousal."],
        ["Build positive experiences to lower her overall vulnerability.", "Helps over time, but it does not calm an emotional spike in the moment."],
        ["Use TIPP skills, like cold water on the face and paced breathing.", "TIPP changes body chemistry fast. It is the distress tolerance skill for when emotions are too high to think."]
      ],
      c: 3,
      tip: "TIPP = Temperature, Intense exercise, Paced breathing, Paired muscle relaxation." },

    { id: "i38", cat: "interv",
      text: "During a session, a client who smokes makes several statements about her smoking.",
      ask: "Which statement is change talk?",
      opts: [
        ["“My grandfather smoked his whole life and lived to 90.”", "This is sustain talk, an argument for keeping things the same."],
        ["“I've tried quitting before, and it never sticks.”", "This leans toward sustain talk and doubt about her ability to change."],
        ["“I want to play soccer with my kids without running out of breath.”", "This expresses desire and a reason to change, which is change talk to reflect and build on."],
        ["“Everyone at work smokes, so it's hard to avoid it.”", "This explains why change is hard, which is sustain talk."]
      ],
      c: 2,
      tip: "Change talk = DARN-CAT: Desire, Ability, Reasons, Need, Commitment, Activation, Taking steps." },

    { id: "i39", cat: "interv",
      text: "A woman says that whenever she and her husband argue, she calls their adult daughter to vent. The daughter then gets angry with her father.",
      ask: "In Bowen family systems theory, what is this pattern called?",
      opts: [
        ["Emotional cutoff", "Cutoff means managing unresolved tension by distancing from family, not pulling someone in."],
        ["Triangulation", "Two people in conflict pull in a third to lower their own anxiety. Bowen saw the triangle as the basic unit of family systems."],
        ["Enmeshment", "Enmeshment is a structural family therapy term for blurred, overly close boundaries."],
        ["Scapegoating", "Scapegoating blames one member for the family's problems. Here the daughter is drawn in as an ally."]
      ],
      c: 1,
      tip: "Bowen: triangles lower tension between two people. The goal is differentiation of self." },

    { id: "i40", cat: "interv",
      text: "In a parenting support group, one member talks at length every week. Other members have started to look bored and stop speaking.",
      ask: "What is the BEST response by the group leader?",
      opts: [
        ["Ask the member to leave, since she keeps disrupting the group.", "Removal is a last resort. The leader should first try to manage the pattern within the group."],
        ["Wait for other members to confront her about it on their own.", "Members are already withdrawing. The leader is responsible for balancing participation."],
        ["Gently cut in, thank her, and invite others to share their views.", "Kindly blocking and drawing others in protects the group without shaming one member."],
        ["Discuss the problem with the rest of the group while she is absent.", "Talking about her behind her back harms trust and group safety."]
      ],
      c: 2,
      tip: "Monopolizer: block gently, link, and draw others in." },

    { id: "i41", cat: "interv",
      text: "A school social worker wants to show that a reward chart, and not something else, is what reduces a student's classroom outbursts.",
      ask: "Which single-subject design gives the STRONGEST evidence?",
      opts: [
        ["An AB design", "AB shows change after the intervention, but it can't rule out other causes that happened at the same time."],
        ["A B design with no baseline", "Without a baseline there is nothing to compare the results to."],
        ["A case study with progress notes", "Narrative notes give the weakest evidence of cause."],
        ["An ABAB (withdrawal) design", "If behavior improves, gets worse when the chart is removed, then improves again, the chart is likely the cause."]
      ],
      c: 3,
      tip: "ABAB = strongest single-subject evidence. The ethical catch: you remove something that helps." },

    { id: "i42", cat: "interv",
      text: "Halfway through the first year of a new after-school program, staff survey students and parents to learn what is working and what needs to change.",
      ask: "What type of evaluation is this?",
      opts: [
        ["Formative evaluation", "Formative evaluation happens while a program is running, to improve it."],
        ["Summative evaluation", "Summative evaluation judges a program's overall worth at the end, often for funding decisions."],
        ["Outcome (impact) evaluation", "Outcome evaluation asks whether participants changed, not how to improve the program midstream."]
      ],
      c: 0,
      tip: "Formative = forming and improving along the way. Summative = summing up at the end." },

    { id: "i43", cat: "interv",
      text: "Evaluators of a home-visiting program check how often visits happen, whether staff follow the program model, and which families are being reached.",
      ask: "What type of evaluation is this?",
      opts: [
        ["Outcome evaluation", "Outcome evaluation measures whether families changed, not how the program was delivered."],
        ["Needs assessment", "A needs assessment comes before a program, to find gaps and needs."],
        ["Process evaluation", "Process evaluation checks whether a program is delivered as planned: fidelity, dosage, and reach."],
        ["Cost-effectiveness analysis", "That compares costs with results, which these evaluators are not doing."]
      ],
      c: 2,
      tip: "Process = was it delivered as planned? Outcome = did people change?" },

    { id: "i44", cat: "interv",
      text: "An agency wants to start a program for older adults in a rural county, but no one is sure which services they lack most.",
      ask: "What should the agency do FIRST?",
      opts: [
        ["Start a meals program, since it is the most common senior service.", "Guessing from what is common elsewhere may miss what this county needs."],
        ["Do a needs assessment with residents, providers, and local data.", "A needs assessment finds gaps before a program is designed, so services match real needs."],
        ["Run an outcome evaluation of a similar program in another county.", "That says whether another program worked, not what this county needs."],
        ["Apply for grants for the services staff believe are most needed.", "Staff opinion alone is not evidence of need. Ask the community first."]
      ],
      c: 1,
      tip: "Before designing a program: needs assessment." },

    { id: "i45", cat: "interv",
      text: "An agency compares two substance use programs by calculating the cost per client who stays sober for one year.",
      ask: "What type of analysis is this?",
      opts: [
        ["Cost-benefit analysis", "Cost-benefit puts a dollar value on the outcomes too and compares total dollars in and out."],
        ["Cost-effectiveness analysis", "Cost-effectiveness measures cost per unit of outcome, with the outcome left in natural units like sober clients."],
        ["Process evaluation", "Process evaluation looks at how a program is delivered, not its costs."]
      ],
      c: 1,
      tip: "Cost-effectiveness = cost per outcome. Cost-benefit = costs and outcomes both in dollars." },

    { id: "i46", cat: "interv",
      text: "A new anxiety scale gives nearly the same score when a client takes it twice in one week. But the scores don't match clinicians' ratings of anxiety and seem to track tiredness instead.",
      ask: "What is the BEST description of this scale?",
      opts: [
        ["Valid but not reliable", "A scale that is not consistent cannot be valid, and this one is consistent."],
        ["Both reliable and valid", "The scores don't match other measures of anxiety, so validity is in doubt."],
        ["Neither reliable nor valid", "The scores are consistent over time, so the scale is reliable."],
        ["Reliable but not valid", "Consistent scores show reliability. Not measuring anxiety means it is not valid."]
      ],
      c: 3,
      tip: "Reliable = consistent. Valid = measures what it claims. Reliable is possible without valid, not the other way." },

    { id: "i47", cat: "interv",
      text: "A social worker wants to study whether her agency's new group program reduces depression and publish the results. The participants would be current clients.",
      ask: "What must she do BEFORE collecting data?",
      opts: [
        ["Get ethics board approval and voluntary informed consent.", "Research with clients needs IRB or ethics review and consent that makes clear saying no won't affect services."],
        ["Get her supervisor's approval, since the data belong to the agency.", "Supervisor approval is not enough. Research needs ethics review and client consent."],
        ["Collect the data first and remove all names before publishing.", "Removing names later does not replace consent before data collection."],
        ["Tell clients that taking part is a condition of joining the group.", "Research must be voluntary. Services can never depend on agreeing to take part."]
      ],
      c: 0,
      tip: "Research with clients: IRB review + voluntary informed consent. Saying no never costs them services." },

    { id: "i48", cat: "interv",
      text: "A social worker treating a client for depression wants to track whether she is improving over time.",
      ask: "What is the BEST way to measure progress?",
      opts: [
        ["Ask her at the end of treatment whether she feels any better overall.", "One look back at the end gives no baseline and no picture of change over time."],
        ["Give a standardized depression scale at baseline and at set points.", "A reliable, valid measure repeated over time shows real change and guides treatment."],
        ["Rely on the social worker's clinical impressions in session notes.", "Impressions are useful but subjective and hard to compare across time."],
        ["Count the number of sessions she attends over the next months.", "Attendance is a service output, not a measure of whether her depression improved."]
      ],
      c: 1,
      tip: "Track progress with a standardized measure, repeated over time, starting with a baseline." },

    { id: "i49", cat: "interv",
      text: "A researcher wants to understand how refugee mothers experience raising teenagers in a new country, in their own words.",
      ask: "Which method is BEST?",
      opts: [
        ["A large survey that uses rating scales", "Rating scales give numbers, not the mothers' own words and meanings."],
        ["A review of the teens' school attendance records", "Records give no view of the mothers' experience."],
        ["In-depth interviews analyzed for themes", "Qualitative methods capture lived experience and meaning in participants' own words."],
        ["An experiment comparing two parenting programs", "Experiments test whether something works, not what an experience is like."]
      ],
      c: 2,
      tip: "Meaning and experience = qualitative. How much or how many = quantitative." },

    { id: "i50", cat: "interv",
      text: "After a client dies by suicide, a social worker can't sleep and wonders whether she should stay in the field. Her supervisor spends their meeting helping her process the loss and plan self-care.",
      ask: "Which function of supervision is this?",
      opts: [
        ["Administrative", "Administrative supervision covers policies, workload, and accountability."],
        ["Educational", "Educational supervision builds knowledge and practice skills."],
        ["Supportive", "Supportive supervision addresses stress, morale, and burnout so the worker can keep functioning well."]
      ],
      c: 2,
      tip: "Administrative = rules and workload. Educational = skills. Supportive = stress and morale." },

    { id: "i51", cat: "interv",
      text: "A newly licensed social worker in clinical supervision realizes she gave a client wrong information about the limits of confidentiality in their first session two weeks ago.",
      ask: "What is the BEST action?",
      opts: [
        ["Correct it with the client herself but leave it out of supervision.", "Supervisees are responsible for bringing mistakes to supervision, not just fixing them alone."],
        ["Wait to see if it causes a problem before mentioning it.", "Waiting leaves the client with wrong information and hides the error."],
        ["Write a note in the file and handle it on her own.", "Documenting is not enough. The supervisor needs to know and help plan the fix."],
        ["Tell her supervisor soon and plan the correction with the client.", "Supervisees must be open about errors. Prompt disclosure protects the client and lets the supervisor help."]
      ],
      c: 3,
      tip: "Supervisees bring mistakes, doubts, and learning needs to supervision promptly." },

    { id: "i52", cat: "interv",
      text: "A social worker in private practice pays an experienced colleague to discuss a hard case once a month. The colleague has no authority over her work.",
      ask: "Which statement about this arrangement is TRUE?",
      opts: [
        ["It is consultation, and she decides whether to use the advice.", "A consultant advises without authority. The social worker keeps full responsibility for her decisions."],
        ["It is supervision, so the colleague shares responsibility for the case.", "Supervision involves authority and accountability, which this colleague does not have."],
        ["It is peer supervision, so she has to follow the colleague's advice.", "Peer supervision is among equals and does not require following advice."]
      ],
      c: 0,
      tip: "Consultation = advice without authority. Supervision = authority plus shared accountability." },

    { id: "i53", cat: "interv",
      text: "A client keeps asking her social worker to make all her decisions for her. In supervision, the social worker starts asking her supervisor to tell her exactly what to do with this client.",
      ask: "What does this MOST likely reflect?",
      opts: [
        ["Parallel process", "The client-worker dynamic is being replayed between worker and supervisor. Naming it helps both relationships."],
        ["Transference", "Transference is the client's feelings toward the worker, not a pattern repeated in supervision."],
        ["Compassion fatigue", "Compassion fatigue is emotional exhaustion from caring for people in pain, not a mirrored pattern."],
        ["Role conflict", "Role conflict means clashing job demands, which is not what is happening."]
      ],
      c: 0,
      tip: "Parallel process = the client relationship gets mirrored in supervision." },

    { id: "i54", cat: "interv",
      text: "A clinical supervisor oversees six social workers who carry high-risk caseloads.",
      ask: "Which practice BEST reduces the supervisor's liability risk?",
      opts: [
        ["Meet regularly, review high-risk cases and records, and document it.", "Supervisors can be held liable for supervisees' work. Regular, documented oversight of risky cases is the protection."],
        ["Let her more experienced supervisees decide which cases to bring up.", "The supervisor may never learn about the cases that carry the most risk."],
        ["Avoid reading case notes so she isn't responsible for their content.", "Not looking does not remove liability and leaves clients less protected."],
        ["Have supervisees sign forms taking full responsibility for cases.", "A signed form does not end the supervisor's legal and ethical duties."]
      ],
      c: 0,
      tip: "Vicarious liability: supervisors share responsibility. Regular, documented review is the safeguard." },

    { id: "i55", cat: "interv",
      text: "A Black social worker tells her program director that coworkers often touch her hair and tell her she is “so articulate.” She says it is wearing her down.",
      ask: "What is the BEST response by the director?",
      opts: [
        ["Advise her to address each coworker herself, since that works best.", "This puts the burden on the person being harmed. The director is responsible for the workplace."],
        ["Tell her the comments are likely meant kindly and to let them go.", "This minimizes microaggressions and her experience."],
        ["Wait to see whether other staff raise similar concerns first.", "One credible report is enough to act. Waiting lets the harm continue."],
        ["Take it seriously and address it with staff, policy, and training.", "Leaders must keep the workplace safe and inclusive by acting on microaggressions, not minimizing them."]
      ],
      c: 3,
      tip: "Administrators own a safe, inclusive workplace: act on reports, don't minimize or shift the burden." },

    { id: "h21", cat: "human",
      text: "A 4-year-old in a play group used to invent games and lead other kids in pretend play. Since his father began scolding him harshly for messes and “silly ideas,” he waits to be told what to do and apologizes constantly.",
      ask: "Which of Erikson's stages is MOST affected?",
      opts: [
        ["Trust vs. mistrust", "That stage is infancy. It depends on whether caregivers meet basic needs reliably."],
        ["Autonomy vs. shame and doubt", "That stage is the toddler years and centers on doing things by yourself, like feeding and toileting."],
        ["Initiative vs. guilt", "Preschoolers start plans and play on their own. Harsh criticism of those efforts can leave guilt instead of a sense of purpose."],
        ["Industry vs. inferiority", "That stage is school age and centers on skills and competence compared with peers."]
      ],
      c: 2,
      tip: "Ages 3 to 5: initiative vs. guilt. Let them plan, pretend, and lead." },

    { id: "h22", cat: "human",
      text: "A 10-year-old with dyslexia tells the school social worker, “I'm the dumbest kid in my class. I'm bad at everything.” He has stopped turning in homework.",
      ask: "Which approach BEST fits his developmental stage?",
      opts: [
        ["Help him find tasks he can master, and praise real effort and progress.", "In Erikson's industry vs. inferiority stage, children build competence by mastering tasks. Real successes counter the sense of inferiority."],
        ["Reassure him that grades don't matter much at his age.", "This dismisses what matters most to him right now. School-age kids judge themselves by what they can do."],
        ["Focus sessions on exploring who he wants to be as an adult.", "Identity questions belong to adolescence. At 10, the main task is competence."],
        ["Ask his teacher to lower expectations so he stops comparing himself to others.", "Lowering the bar without support can confirm his belief that he can't do it. Accommodations plus skill-building work better."]
      ],
      c: 0,
      tip: "Ages 6 to 12: industry vs. inferiority. Competence comes from real wins." },

    { id: "h23", cat: "human",
      text: "A 54-year-old man says his life has felt flat and pointless since his children moved out. He recently started mentoring young apprentices at work and says it's the first thing in years that feels meaningful.",
      ask: "Which of Erikson's stages is he working through?",
      opts: [
        ["Intimacy vs. isolation", "That's young adulthood: forming close, committed relationships."],
        ["Identity vs. role confusion", "That's adolescence: figuring out who you are."],
        ["Ego integrity vs. despair", "That's late life: looking back and accepting the life you've lived."],
        ["Generativity vs. stagnation", "Middle adulthood: the need to guide the next generation and contribute. Without it, people feel stuck and self-focused."]
      ],
      c: 3,
      tip: "Midlife: generativity vs. stagnation. Mentoring, parenting, giving back." },

    { id: "h24", cat: "human",
      text: "A 4-year-old in a hospital playroom tells the social worker that the IV pole is “mad at her” and that the moon followed her car to the hospital to watch over her.",
      ask: "How is this BEST understood?",
      opts: [
        ["A possible sign of psychosis that needs a psychiatric consult", "Magical, animistic thinking is normal at this age. It isn't a symptom by itself."],
        ["Normal preoperational thinking that gives objects feelings", "Piaget called this animism. It's typical from about 2 to 7, before logical thinking develops."],
        ["Regression caused by the stress of being in the hospital", "Stress can cause regression, but this kind of thinking is simply typical for a 4-year-old."]
      ],
      c: 1,
      tip: "Ages 2 to 7: animism, egocentrism, magical thinking. Normal, not pathology." },

    { id: "h25", cat: "human",
      text: "A social worker wants to use a cognitive technique that asks clients to test their beliefs against evidence and imagine “what if” outcomes they haven't experienced.",
      ask: "Based on Piaget, which client is MOST likely developmentally ready for this approach?",
      opts: [
        ["A 5-year-old who worries about monsters", "Preschool thinking is concrete and magical. Use play and simple coping skills instead."],
        ["An 8-year-old who is anxious about tests", "Concrete operational kids reason logically about real, present things but struggle with abstract hypotheticals."],
        ["A 15-year-old who fears being rejected", "Formal operations, from about age 11 or 12, brings abstract and hypothetical reasoning. That's what this technique needs."],
        ["A 10-year-old who feels left out at recess", "At 10, thinking is still concrete operational. Abstract “what if” reasoning is mostly out of reach."]
      ],
      c: 2,
      tip: "Abstract “what if” thinking = formal operations, about 11 or 12 and up." },

    { id: "h26", cat: "human",
      text: "A client feels intense guilt and calls herself “a terrible person” over small mistakes, like forgetting to return a call. She holds herself to rigid moral rules.",
      ask: "In Freud's structural model, which part of the personality appears to be overly harsh?",
      opts: [
        ["Superego (conscience)", "The superego is the internalized conscience and ideals. When it's too strict, it produces heavy guilt and self-criticism."],
        ["Ego (reality and balance)", "The ego is the reality-based mediator between drives and conscience. Its job is balance, not punishment."],
        ["Id (drives and impulses)", "The id holds basic drives and seeks pleasure. It has no sense of right and wrong."]
      ],
      c: 0,
      tip: "Id = wants it now. Superego = should and shouldn't. Ego = referee in reality." },

    { id: "h27", cat: "human",
      text: "A mother says her 18-month-old used to toddle off happily to explore. Now he runs off, then rushes back to show her things, cries when she leaves the room, and pushes her away when she tries to help.",
      ask: "In Mahler's theory, which subphase is this?",
      opts: [
        ["Practicing", "In practicing (about 10 to 16 months), the new walker explores happily with little worry about mom."],
        ["Rapprochement", "From about 16 to 24 months, the child realizes he's separate and swings between independence and clinging. This back-and-forth is normal."],
        ["Differentiation", "Differentiation (about 5 to 10 months) is the baby's first sense of being separate, as in stranger anxiety."],
        ["Object constancy", "That's the later ability (about 24 to 36 months) to hold a steady inner image of mom when she's away."]
      ],
      c: 1,
      tip: "Rapprochement: “go away, come back.” Normal toddler push-pull, about 16 to 24 months." },

    { id: "h28", cat: "human",
      text: "A 7-year-old can't finish a puzzle alone, but she completes it when her tutor asks guiding questions and points out the edge pieces. Over time the tutor gives less help.",
      ask: "Which concept does this BEST illustrate?",
      opts: [
        ["Assimilation, fitting new information into existing schemas", "That's Piaget's term for how a child takes in new information. It doesn't describe guided help from an adult."],
        ["Vicarious learning, copying a model who is rewarded", "That's Bandura. The child isn't watching someone else get rewarded."],
        ["Zone of proximal development, with scaffolding", "Vygotsky: the gap between what a child can do alone and with help. Support that fades as skill grows is called scaffolding, a term later researchers built on his idea."]
      ],
      c: 2,
      tip: "ZPD = can't do it alone, can do it with help. Scaffold, then fade." },

    { id: "h29", cat: "human",
      text: "Asked about a moral dilemma, a woman explains her choice by talking about who would be hurt and what she owes the people close to her. A colleague notes that Kohlberg's scale would score this lower than abstract, rule-based answers.",
      ask: "Whose theory BEST addresses this concern?",
      opts: [
        ["Erikson, who described a stage of intimacy vs. isolation", "Erikson's stages cover psychosocial conflicts, not styles of moral reasoning."],
        ["Piaget, who described moral realism in young children", "Piaget's moral stages focus on how children view rules, not adult relationship-based ethics."],
        ["Bandura, who showed that moral behavior is learned by modeling", "Modeling explains how behavior is learned, not why care-based reasoning was undervalued."],
        ["Gilligan, who described an ethic of care", "Carol Gilligan argued that Kohlberg's research, built mainly on boys and men, undervalued reasoning based on care, relationships, and responsibility."]
      ],
      c: 3,
      tip: "Gilligan: ethic of care (relationships). Kohlberg: ethic of justice (rules and rights)." },

    { id: "h30", cat: "human",
      text: "A 31-year-old client texts her partner many times a day for reassurance, fears he will leave whenever he is busy, and says she can never feel close enough to him.",
      ask: "Which adult attachment style does this MOST suggest?",
      opts: [
        ["Dismissive-avoidant", "Dismissive adults value independence and keep partners at a distance. She seeks more closeness, not less."],
        ["Anxious-preoccupied", "Anxious adults crave closeness, fear abandonment, and need frequent reassurance. This often traces back to inconsistent early care."],
        ["Secure, reacting to normal relationship stress", "Secure adults trust partners and handle time apart without constant fear. Her pattern is ongoing, not a passing reaction."]
      ],
      c: 1,
      tip: "Anxious: “Don't leave me.” Avoidant: “Don't get too close.” Secure: comfortable with both." },

    { id: "h31", cat: "human",
      text: "Parents of a 2-year-old raised in a Spanish-English home say she uses about five words, doesn't combine words, and rarely points to show them things. Her pediatrician hasn't seen her in a year.",
      ask: "What is the BEST response?",
      opts: [
        ["Encourage a developmental and hearing evaluation right away.", "By 2, children should be putting two words together and pointing to show things. Fewer than 50 words at 2 is a common flag for evaluation. Early help leads to better outcomes."],
        ["Explain that learning two languages often delays speech and she will catch up.", "Bilingual children reach language milestones on a similar schedule when both languages are counted. This myth delays help."],
        ["Suggest the parents use only English at home so she isn't confused.", "Dropping the home language doesn't fix a delay. Children do best with rich talk in the parents' strongest language."],
        ["Suggest waiting until age 3, since many late talkers catch up on their own.", "Some do, but with so few words and no pointing, waiting risks missing a real delay. Evaluate now."]
      ],
      c: 0,
      tip: "Red flags at 2: few words, no two-word phrases, no pointing. Evaluate, don't wait." },

    { id: "h32", cat: "human",
      text: "Parents of a 16-year-old are confused. He gets good grades and can explain the dangers of reckless driving, yet he speeds whenever his friends are in the car.",
      ask: "What BEST explains this pattern?",
      opts: [
        ["He lacks the knowledge to understand risk and needs more safety education.", "He clearly understands the risk. Knowledge alone doesn't stop risky choices in the moment."],
        ["Reward areas mature before self-control areas, and peers boost the pull.", "The prefrontal cortex keeps maturing into the mid-20s, while reward sensitivity peaks in adolescence. Having peers present raises risk-taking."],
        ["Risk-taking at this age points to an emerging conduct disorder.", "Some risk-taking is developmentally typical. Conduct disorder is a pattern of violating others' rights and rules."],
        ["He is acting out unresolved anger at his parents.", "Nothing in the vignette points to anger. The peer effect is the key detail."]
      ],
      c: 1,
      tip: "Teen brain: gas pedal early, brakes later (mid-20s). Peers press the gas." },

    { id: "h33", cat: "human",
      text: "A 4-year-old's father died suddenly last month. She keeps asking when Daddy is coming home, plays happily for a while, then becomes clingy and has tantrums at bedtime.",
      ask: "What is the BEST guidance for her mother?",
      opts: [
        ["Tell her Daddy is sleeping or went on a long trip, to soften the loss.", "Euphemisms confuse young children and can make them afraid of sleep or trips. Use clear, concrete words."],
        ["Refer her for evaluation, since her up-and-down reactions suggest complicated grief.", "Moving in and out of grief is typical for young children. It isn't a sign of a disorder."],
        ["Answer each time, simply and honestly, that Daddy died and can't come back.", "Young children don't yet grasp that death is permanent, so repeated questions are normal. Concrete, honest answers and steady routines help."],
        ["Avoid talking about her father until she is old enough to understand.", "Silence leaves the child alone with her confusion. Children grieve at every age and need honest talk."]
      ],
      c: 2,
      tip: "Preschool grief: repeated questions, grief in bursts. Use the word “died” and keep routines." },

    { id: "h34", cat: "human",
      text: "An 81-year-old widow with Alzheimer's disease needs to move into a nursing home for long-term care. She has Medicare and Social Security, and her savings are almost gone.",
      ask: "Which program is MOST likely to pay for her long-term nursing home stay?",
      opts: [
        ["Medicare", "Medicare covers only short-term skilled nursing care after a qualifying hospital stay, up to 100 days. It doesn't pay for ongoing custodial care."],
        ["Social Security", "Social Security is an income benefit, not health coverage. Her check usually goes toward her care, but it falls far short of the cost."],
        ["Medicaid", "Medicaid is the main payer for long-term nursing home care for people who meet its income and asset limits."]
      ],
      c: 2,
      tip: "Medicare = short-term skilled care (up to 100 days). Medicaid = long-term care when money runs out." },

    { id: "h35", cat: "human",
      text: "Whenever her parents argue, a 13-year-old gets pulled in. Her mother vents to her about her father, and her father asks her to pass messages to her mother. Her grades are falling.",
      ask: "Which family systems concept BEST describes this?",
      opts: [
        ["Triangulation", "A third person, often a child, is drawn into a two-person conflict to ease tension. It calms the couple but burdens the child."],
        ["Scapegoating", "Scapegoating blames one member for the family's problems. She's being used as a go-between, not blamed."],
        ["Disengagement", "Disengaged families have rigid boundaries and little involvement. She is over-involved."],
        ["Differentiation", "Differentiation is the ability to stay yourself within the family's emotions. It's the opposite of being pulled in."]
      ],
      c: 0,
      tip: "Triangle: two people in conflict pull in a third. Help the couple talk to each other directly." },

    { id: "h36", cat: "human",
      text: "A 34-year-old man calls his mother several times a day, can't make decisions without her approval, and becomes anxious whenever she's upset, even about things unrelated to him.",
      ask: "In Bowen family systems theory, what does this MOST suggest?",
      opts: [
        ["A disengaged family boundary", "Disengagement means distance and little involvement. This is the opposite."],
        ["An emotional cutoff", "Cutoff manages family tension by distancing or ending contact. He is moving closer, not away."],
        ["Triangulation with his mother", "Triangulation needs a third person pulled into a conflict between two others."],
        ["Low differentiation of self", "Low differentiation means emotional fusion: his thoughts and feelings are run by her emotions, not his own."]
      ],
      c: 3,
      tip: "Bowen: well-differentiated = close AND still yourself. Low = fusion. The other extreme = cutoff." },

    { id: "h37", cat: "human",
      text: "As planned with the social worker, a father has started ignoring his daughter's whining for candy at the store. For the first week, her whining gets louder and lasts longer.",
      ask: "What should the social worker tell the father?",
      opts: [
        ["The plan isn't working, so it's time to try a different approach.", "Giving up now teaches the child that more whining pays off."],
        ["This spike is expected. Stay consistent and it should fade.", "An extinction burst is a short surge when a reward stops. Giving in now would reinforce the worse behavior."],
        ["Give her candy once in a while so the change feels less harsh.", "Rewarding now and then is intermittent reinforcement, which makes behavior even harder to stop."],
        ["Explain to her why candy is unhealthy each time she whines.", "Explaining gives her attention, which can keep the whining going."]
      ],
      c: 1,
      tip: "Extinction burst: worse before better. Don't give in. Occasional rewards make it stick." },

    { id: "h38", cat: "human",
      text: "After being racially profiled by campus police, a Black college student who once downplayed race now reads only Black authors, joins Black student groups, and avoids his white friends, saying he can't trust them.",
      ask: "In Cross's model of Black identity development, which stage is he MOST likely in?",
      opts: [
        ["Pre-encounter", "In pre-encounter, a person downplays race or favors white norms. He used to be here."],
        ["Encounter", "The encounter is the event that shakes old views, like the profiling. He has moved past it into a new phase."],
        ["Immersion-emersion", "He is surrounding himself with Black culture and pulling away from white people. That's typical of immersion-emersion."],
        ["Internalization-commitment", "That final stage brings a secure Black identity, lasting commitment to action, and openness to others. He isn't there yet."]
      ],
      c: 2,
      tip: "Cross: pre-encounter, encounter, immersion-emersion, internalization, internalization-commitment." },

    { id: "h39", cat: "human",
      text: "A 15-year-old Mexican American client says she's embarrassed by her family's accent and food, wants only white friends, and says, “I'm not like other Mexicans.”",
      ask: "In the minority identity development model (Atkinson, Morten, and Sue), which stage BEST fits?",
      opts: [
        ["Dissonance", "Dissonance starts when experiences challenge her views and create confusion. She shows no conflict yet."],
        ["Resistance and immersion", "That stage rejects the dominant culture and embraces one's own. She's doing the reverse."],
        ["Integrative awareness", "That's a secure identity that values her own culture and others. She devalues her own."],
        ["Conformity", "In conformity, a person prefers the dominant culture's values and looks down on their own group."]
      ],
      c: 3,
      tip: "MID: conformity, dissonance, resistance and immersion, introspection, integrative awareness." },

    { id: "h40", cat: "human",
      text: "A 24-year-old man came out last year. He now spends nearly all his time in LGBTQ spaces, is angry at straight people in general, and calls straight friends who support him “clueless.”",
      ask: "In Cass's model of sexual identity formation, which stage does this MOST suggest?",
      opts: [
        ["Identity pride", "Pride brings deep immersion in the gay community, anger at heterosexual society, and an us-versus-them view."],
        ["Identity tolerance", "In tolerance, he'd be cautiously seeking out gay people while not yet fully accepting the identity."],
        ["Identity synthesis", "Synthesis is the final stage. Sexual identity becomes one part of the whole self, and allies are seen as allies."],
        ["Identity comparison", "Comparison is an early stage of weighing the possibility of being gay, often with a sense of not fitting in."]
      ],
      c: 0,
      tip: "Cass: confusion, comparison, tolerance, acceptance, pride, synthesis. Pride = us vs. them." },

    { id: "h41", cat: "human",
      text: "A Vietnamese immigrant family asks for help with conflict. Their 14-year-old son, who speaks fluent English and translates for his parents at the bank and doctor, now argues about curfews and calls their rules old-fashioned.",
      ask: "What BEST explains the family's stress?",
      opts: [
        ["Normal adolescent rebellion that will pass on its own", "Some pushback is normal, but this misses how adapting to a new culture shapes the conflict."],
        ["An acculturation gap, worsened by his role as interpreter", "Children often adapt faster than parents. Acting as interpreter can flip family roles and weaken parents' authority."],
        ["The parents' failure to adapt to their new culture", "This blames the parents. Adapting at different speeds is normal, and the gap itself is the issue."],
        ["The son's assimilation and rejection of his family's heritage", "Nothing says he rejects his heritage. He is simply moving into the new culture faster than his parents."]
      ],
      c: 1,
      tip: "Acculturation gap: kids adapt faster, roles flip. Avoid using children as interpreters." },

    { id: "h42", cat: "human",
      text: "A 21-year-old raised in a devout church tells the social worker she's questioning beliefs she once accepted without thought. She wants to decide for herself what she believes, even if it differs from her family.",
      ask: "In Fowler's stages of faith, which stage is she MOST likely entering?",
      opts: [
        ["Individuative-reflective", "This stage, often in young adulthood, means critically examining inherited beliefs and taking personal ownership of them."],
        ["Synthetic-conventional", "This adolescent stage holds a faith shaped by the community and mostly unexamined. She's moving beyond it."],
        ["Universalizing", "This rare final stage centers on selfless commitment to justice and love for all. It doesn't fit a young adult's questioning."]
      ],
      c: 0,
      tip: "Fowler: teens absorb the group's faith (synthetic-conventional). Young adults question and own it (individuative-reflective)." },

    { id: "h43", cat: "human",
      text: "A 9-year-old has lived through his parents' divorce, his mother's incarceration, and two moves. His school social worker is planning ways to strengthen his resilience.",
      ask: "Which protective factor does research MOST consistently link to resilience in children like him?",
      opts: [
        ["High intelligence and strong grades", "Problem-solving skills help, but they matter less than relationships and can't replace them."],
        ["Staying busy with many structured activities", "Activities can help, but being busy isn't the key ingredient."],
        ["A steady, caring bond with at least one adult", "The most consistent finding: at least one stable, supportive adult buffers the effects of adversity and toxic stress."],
        ["Not talking about the hard events so he can move on", "Avoidance doesn't build resilience. Safe chances to process what happened support coping."]
      ],
      c: 2,
      tip: "Top buffer against ACEs: one stable, caring adult. Relationships build resilience." },

    { id: "h44", cat: "human",
      text: "A client who uses a wheelchair tells the social worker, “My legs aren't the problem. The problem is that the job center has stairs and no ramp, and the bus lift is always broken.”",
      ask: "Which view of disability is the client expressing?",
      opts: [
        ["The medical model", "The medical model locates disability in the body and focuses on diagnosis, treatment, and cure."],
        ["The social model", "The social model sees disability as created by barriers in the environment and society. The fix is removing barriers."],
        ["The moral model", "The moral model sees disability as a sign of sin, shame, or a test. Nothing here suggests that."]
      ],
      c: 1,
      tip: "Medical model: fix the person. Social model: fix the barriers." },

    { id: "h45", cat: "human",
      text: "A 41-year-old woman was just diagnosed with autism. She says she spent years copying other people's social behavior to fit in and feels exhausted, but also relieved to finally have an explanation.",
      ask: "Which response is MOST consistent with a neurodiversity-affirming approach?",
      opts: [
        ["Explore what the diagnosis means to her and what would ease the strain of masking.", "This treats autism as a difference, not a defect. It centers her view and looks at changing demands, not just building skills."],
        ["Help her practice looking more natural in social situations so she can keep fitting in.", "Masking is linked to exhaustion, burnout, and depression. Polishing the mask adds to the strain."],
        ["Tell her that autism diagnosed this late is usually mild and needs little support.", "A late diagnosis often reflects masking, not low support needs. Women are often diagnosed late."],
        ["Focus on whether the diagnosis is accurate, since autism usually shows up in childhood.", "Autism starts early, but many adults, especially women, were missed as children. Questioning it dismisses her."]
      ],
      c: 0,
      tip: "Neurodiversity-affirming: difference, not deficit. Reduce masking and adapt the environment." }
  ] /* Q-END */;
